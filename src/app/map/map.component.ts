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
import { Feature, MapBrowserEvent } from 'ol';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})

export class MapComponent implements AfterViewInit {

    constructor(private jordbruksblockService: JordbruksblockService) { }

    selectedBlock: Jordbruksblock = {
        BLOCKID: '',
        REGION: '',
        AGOSLAG: '',
        AREAL: 0,
        KATEGORI: '',
        geometry: {}
    };

    selectedFeature: Feature;

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

    // @ts-ignore
    // fakeSelectEvent = new SelectEvent({
    //     selected: [],
    //     deselected: this.selectedBlock,
    // });

    stylefunction = (feature: any) => {
        if (feature.get('AGOSLAG') === undefined) {
            return this.mapDefaults.annatStyle;
        }
        return feature.get('AGOSLAG').toUpperCase() === 'AKER' ? this.mapDefaults.farmStyle : this.mapDefaults.annatStyle;
    }

    displaySelected(block) {
        this.selectInteraction.set('features', []);
        console.log(this.selectInteraction.getProperties());
        console.log(this.selectedFeature);
        if (this.selectedFeature) {
            this.selectedFeature.setStyle(this.stylefunction);
        }
        this.visingsoData.forEachFeature((feature) => {
            if (feature.get('BLOCKID') === block.BLOCKID) {
                feature.setStyle(this.mapDefaults.selectedStyle);

                const ext = feature.getGeometry().getExtent();
                const center = getCenter(ext);
                this.mapDefaults.mapView.setCenter(center);
                this.mapDefaults.mapView.setZoom(13);
                this.selectedBlock = block;
                // this.map.dispatchEvent({type: 'select', selected: feature, deselected: this.selectedBlock});
                // feature.dispatchEvent({type: 'select', target: Select, selected: feature, deselected: this.selectedBlock});
                // console.log(feature);
                this.selectedFeature = feature;
            }
        });
    }

    addSelectInteraction(): void {
        this.map.addInteraction(this.selectInteraction);
        this.selectInteraction.on('select', (evt) => {
            const block = evt.selected[0].getProperties();
            console.log(evt.selected[0]);
            console.log(evt);
            this.selectedBlock = {
                BLOCKID: block.BLOCKID,
                REGION: block.REGION,
                AGOSLAG: block.AGOSLAG,
                AREAL: block.AREAL,
                KATEGORI: block.KATEGORI,
                geometry: block.geometry
            };
        });
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
