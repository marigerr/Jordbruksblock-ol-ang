import { Component, AfterViewInit, HostBinding } from '@angular/core';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat, toLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { MapStyle } from './map.styles';
import Select from 'ol/interaction/Select';
import MouseWheelZoom from 'ol/interaction/MouseWheelZoom';
import ScaleLine from 'ol/control/ScaleLine';
import { JordbruksblockService } from '../jordbruksblock.service';
import { Jordbruksblock } from '../models/jordbruksblock.model';
import {getArea, getLength} from 'ol/sphere.js';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})

export class MapComponent implements AfterViewInit {

    constructor(private jordbruksblockService: JordbruksblockService) { }

    blocks: any;
    // blocks: Jordbruksblock[];
    //   selectedBlock: any;

    map = new Map({
        interactions: [
            new MouseWheelZoom(),
        ]
    });

    visingsoData = new VectorSource({});

    osmTileLayer = new TileLayer({
        preload: 4,
        opacity: .5,
        source: new OSM()
    });

    geojsonFormat = new GeoJSON({ featureProjection: 'EPSG:3857' });

    mapStyle = new MapStyle();

    selectInteraction = new Select(
        { style: this.mapStyle.selectedStyle }
    );

    stylefunction = (feature: any) => {
        if (feature.get('AGOSLAG') === undefined) {
            return this.mapStyle.annatStyle;
        }
        return feature.get('AGOSLAG').toUpperCase() === 'AKER' ? this.mapStyle.farmStyle : this.mapStyle.annatStyle;
    }

    // get selectedBlock(): Jordbruksblock {
    //     return this.jordbruksblockService.selectedBlock;
    // }
    //   set selectedBlock(block) {
    //       this.jordbruksblockService.selectedBlock = block;
    //   }

    select(block) {
        console.log(block.BLOCKID);

        // this.map.addInteraction(this.selectInteraction);

        this.visingsoData.forEachFeature((feature) => {
            if (feature.get('BLOCKID') === block.blockid) {
                feature.setStyle(this.mapStyle.selectedStyle);
            }
        });
    }

    identify(): void {
        console.log('identify called');
        this.map.addInteraction(this.selectInteraction);
        this.selectInteraction.on('select', () => {
            // @ts-ignore
            const selectedBlock: Jordbruksblock = this.selectInteraction.getFeatures().item(0).getProperties();
            console.log(selectedBlock);
            console.log(getArea(this.selectInteraction.getFeatures().item(0).getGeometry()) / 10000);
            this.jordbruksblockService.selectedBlock = selectedBlock;
        });
    }

    ngAfterViewInit() {

        this.jordbruksblockService.getBlocks()
            .subscribe((data) => {
                console.log('data back getBlocks');
                const newblocks = {
                    type: 'FeatureCollection',
                    features: data
                };
                this.visingsoData.addFeatures(this.geojsonFormat.readFeatures(newblocks));

                const visingsoLayer = new VectorLayer({
                    source: this.visingsoData,
                    style: this.stylefunction
                });
                this.map.setTarget('map');
                this.map.addLayer(this.osmTileLayer);
                this.map.addLayer(visingsoLayer);
                this.map.setView(new View({
                    center: fromLonLat([14.342308044433596, 58.05081693924278]),
                    zoom: 12
                }));
                // this.identify();
                this.map.addControl(new ScaleLine());
                // this.map.removeInteraction(new Point);
            });

    }
}
