import { Component, AfterViewInit, HostBinding } from '@angular/core';
import 'ol/ol.css';
import Map from 'ol/Map';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { MapDefaults } from './map.defaults';
import Select, { SelectEvent, SelectEventType } from 'ol/interaction/Select';
import ScaleLine from 'ol/control/ScaleLine';
import { JordbruksblockService } from '../jordbruksblock.service';
import { Jordbruksblock } from '../models/jordbruksblock.model';
import { getArea, getLength } from 'ol/sphere.js';
import { getCenter } from 'ol/extent';
import { Feature, MapBrowserEvent, Collection } from 'ol';
import Modify from 'ol/interaction/Modify';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})

export class MapComponent implements AfterViewInit {

    constructor(private jordbruksblockService: JordbruksblockService) { }

    selectedBlock: Jordbruksblock = {
        type: '',
        properties: {
            BLOCKID: '',
            REGION: '',
            AGOSLAG: '',
            AREAL: 0,
            KATEGORI: ''
        },
        geometry: {
            type: '',
            coordinates: []
        }
    };

    selectedFeature: Feature;
    featureCollection = new Collection([]);

    mapDefaults = new MapDefaults();

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


    stylefunction = (feature: any) => {
        if (feature.get('AGOSLAG') === undefined) {
            return this.mapDefaults.annatStyle;
        }
        return feature.get('AGOSLAG').toUpperCase() === 'AKER' ? this.mapDefaults.farmStyle : this.mapDefaults.annatStyle;
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
            // add modify interaction on selected feature
            this.map.addInteraction(modifyInteraction);
            modifyInteraction.on('modifyend', (evt) => {
                // @ts-ignore
                this.selectedBlock = this.mapDefaults.geojsonFormat.writeFeatureObject(evt.features.getArray()[0]);
                this.selectedFeature = evt.features.getArray()[0];
            });
        } else {
            // remove modify interaction - need better solution
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

    ngAfterViewInit() {

        this.jordbruksblockService.getBlocks()
            .subscribe((data) => {
                this.geojsonData.features = data;
                this.visingsoData.addFeatures(this.mapDefaults.geojsonFormat.readFeatures(this.geojsonData));

                const visingsoLayer = new VectorLayer({
                    source: this.visingsoData,
                    style: this.stylefunction
                });
                this.map.addLayer(this.mapDefaults.osmTileLayer);
                this.map.addLayer(visingsoLayer);
                this.map.setTarget('map');
                this.addSelectInteraction();
            });

    }
}
