import { Component, AfterViewInit, HostBinding } from '@angular/core';
import 'ol/ol.css';
import Map from 'ol/Map';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { MapDefaults } from './map.defaults';
import Select, { SelectEvent, SelectEventType } from 'ol/interaction/Select';
import ScaleLine from 'ol/control/ScaleLine';
import { JordbruksblockService } from '../../jordbruksblock.service';
import { Jordbruksblock, makeEmptyBlock } from '../../models/jordbruksblock.model';
import { getArea, getLength } from 'ol/sphere.js';
import { getCenter } from 'ol/extent';
import { Feature, MapBrowserEvent, Collection } from 'ol';
import Modify from 'ol/interaction/Modify';
import { BaseMapControl } from './map.defaults';
import { Fill, Style } from 'ol/style';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})

export class MapComponent implements AfterViewInit {

    constructor(private jordbruksblockService: JordbruksblockService) { }

    dataAndTilesLoaded = false;
    mapDefaults = new MapDefaults();
    baseMapControls = this.mapDefaults.baseMapControls;
    currentBaseMap: BaseMapControl = { value: 'osmTileLayer', viewValue: 'Gata', opacity: 1 };
    blockOpacity = 1;
    selectedBlock: Jordbruksblock = makeEmptyBlock();
    selectedFeature: Feature;
    featureCollection = new Collection([]);
    fieldTypes: any;

    selectInteraction = new Select(
        { style: this.mapDefaults.selectedStyle }
    );

    map = new Map({
        view: this.mapDefaults.mapView,
        controls: [new ScaleLine()],
    });

    geojsonData = {
        type: 'FeatureCollection',
        features: {}
    };

    visingsoData = new VectorSource({});
    visingsoLayer = new VectorLayer({
        opacity: this.blockOpacity
    });

    stylefunction = (feature: any) => {
        const featureAgoslag = feature.get('AGOSLAG').toUpperCase();
        return this.fieldTypes.filter(obj => obj.name === featureAgoslag)[0].style;
    }

    displaySelected(block: Jordbruksblock) {
        this.selectInteraction.set('features', []);
        if (this.selectedFeature) {
            this.selectedFeature.setStyle(this.stylefunction);
        }
        this.visingsoData.forEachFeature((feature) => {
            if (feature.get('BLOCKID') === block.properties.BLOCKID) {
                feature.setStyle(this.mapDefaults.selectedStyle);

                const ext = feature.getGeometry().getExtent();
                const center = getCenter(ext);
                this.mapDefaults.mapView.setCenter(center);
                this.mapDefaults.mapView.setZoom(13);
                this.selectedBlock = block;
                this.selectedFeature = feature;
            }
        });
    }

    addSelectInteraction(): void {
        this.map.addInteraction(this.selectInteraction);
        this.selectInteraction.on('select', (evt) => {
            if (evt.selected[0]) {
                // @ts-ignore
                this.selectedBlock = this.mapDefaults.geojsonFormat.writeFeatureObject(evt.selected[0]);
                this.selectedFeature = evt.selected[0];
            }
        });
    }

    addEditInteraction(editing: boolean) {
        const modifyInteraction = new Modify({
            features: new Collection([this.selectedFeature])
        });
        if (editing) {
            this.map.addInteraction(modifyInteraction);
            modifyInteraction.on('modifyend', (evt) => {
                const modifiedBlock = evt.features.getArray()[0];
                let newAreaInHektar = getArea(modifiedBlock.getGeometry()) / 10000;
                const decimalPlaceFactor =  Math.pow( 10, ( 10 ) );
                newAreaInHektar = Math.round(newAreaInHektar * decimalPlaceFactor) / decimalPlaceFactor;
                modifiedBlock.setProperties({AREAL: newAreaInHektar});
                // @ts-ignore
                this.selectedBlock = this.mapDefaults.geojsonFormat.writeFeatureObject(modifiedBlock);
                this.selectedFeature = modifiedBlock;
            });
        } else {
            // remove modify interaction
            this.map.getInteractions().pop();
            // remove selected feature highlighing
            this.selectInteraction.getFeatures().getArray().pop();
            // clear modified data
            this.visingsoData.clear();
            // remove and readd select interaction
            this.map.removeInteraction(this.selectInteraction);
            // refresh data
            this.visingsoData.addFeatures(this.mapDefaults.geojsonFormat.readFeatures(this.geojsonData));
            this.addSelectInteraction();
        }
    }

    updateBasemapOpacity(baseMapControl: BaseMapControl) {
        this.mapDefaults.bingTileLayer.setOpacity(baseMapControl.opacity);
        this.mapDefaults.osmTileLayer.setOpacity(baseMapControl.opacity);
        this.mapDefaults.mapboxTileLayer.setOpacity(baseMapControl.opacity);
    }

    updateBlockOpacity(opacity: number) {
        this.visingsoLayer.setOpacity(opacity);
    }

    changeBaseMap(selectedTileLayer) {
        let tempArray = [...this.mapDefaults.baseMapLayers];
        tempArray = tempArray.filter((el) => {
            return el !== selectedTileLayer;
        });
        this.mapDefaults[selectedTileLayer].setVisible(true);
        tempArray.forEach((el) => this.mapDefaults[el].setVisible(false));
    }

    reloadData(bool) {
        // remove modify interaction from array
        this.map.getInteractions().pop();
        this.jordbruksblockService.getBlocks()
            .subscribe((data) => {
                this.visingsoData.clear();
                this.geojsonData.features = data;
                this.visingsoData.addFeatures(this.mapDefaults.geojsonFormat.readFeatures(this.geojsonData));
                this.visingsoLayer.setSource(this.visingsoData);
                this.visingsoLayer.setStyle(this.stylefunction);
                this.addSelectInteraction();
            });
    }

    getAgoslag(data) {
        const fieldTypesArr = [...new Set(data.map(x => x.properties.AGOSLAG))];
        this.fieldTypes = fieldTypesArr.map((x) => {
            const color = this.getColor(x);
            return { name: x, color, style: new Style({ fill: new Fill({ color }), stroke: this.mapDefaults.whiteStroke}) };
          });
    }

    getColor(fieldType) {
        switch (fieldType) {
          case 'AKER':
            return 'hsl(329, 82%, 63%)';
          case 'AKER_PERMGRAS':
            return 'hsla(295, 76%, 22%)';
          case 'AKER_PERMGROD':
            return 'hsla(295, 76%, 41%)';
          case 'BETE':
            return 'yellow';
          case 'OKÄNT':
            return 'grey';
          default:
            return 'grey';
        }
      }

    ngAfterViewInit() {
        this.jordbruksblockService.getBlocks()
            .subscribe((data) => {
                this.geojsonData.features = data;
                this.visingsoData.addFeatures(this.mapDefaults.geojsonFormat.readFeatures(this.geojsonData));
                this.visingsoLayer.setSource(this.visingsoData);
                this.visingsoLayer.setStyle(this.stylefunction);
                this.map.addLayer(this.mapDefaults.bingTileLayer);
                this.map.addLayer(this.mapDefaults.osmTileLayer);
                this.map.addLayer(this.mapDefaults.mapboxTileLayer);
                this.currentBaseMap = { value: 'osmTileLayer', viewValue: 'Gata', opacity: 1 };
                this.map.addLayer(this.visingsoLayer);
                this.map.setTarget('map');
                this.map.on('rendercomplete', () => {
                    this.dataAndTilesLoaded = true;
                });
                this.addSelectInteraction();
                this.getAgoslag(data);
            });
    }
}
