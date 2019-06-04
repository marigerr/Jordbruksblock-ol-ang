import { Style, Fill, Stroke } from 'ol/style';
import GeoJSON from 'ol/format/GeoJSON';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import BingMaps from 'ol/source/BingMaps.js';
import { View } from 'ol';
import { fromLonLat } from 'ol/proj';
import XYZ from 'ol/source/XYZ';

export interface BaseMapControl {
    value: string;
    viewValue: string;
    opacity: number;
  }

export class MapDefaults {

    geojsonFormat = new GeoJSON({ featureProjection: 'EPSG:3857' });

    baseMapControls: BaseMapControl[] = [
        { value: 'osmTileLayer', viewValue: 'Gata', opacity: 1 },
        { value: 'bingTileLayer', viewValue: 'Hybrid', opacity: 1 },
        { value: 'mapboxTileLayer', viewValue: 'Mapbox', opacity: 1 }
      ];

    baseMapLayers: string[] = ['osmTileLayer', 'bingTileLayer', 'mapboxTileLayer'];

    osmTileLayer = new TileLayer({
        preload: 4,
        opacity: 1,
        source: new OSM(),
        visible: true
    });

    bingTileLayer = new TileLayer({
        preload: 4,
        opacity: 1,
        source: new BingMaps({
            imagerySet: 'AerialWithLabels',
            key: 'ArervuhiGe9gN16ELVwf7xGh9-jqfqUquR8rF6ebGsQC8SHEFteTMSxGKit6z8qa',
        }),
        visible: false
    });

    mapboxTileLayer = new TileLayer({
        source: new XYZ({
            // tslint:disable-next-line: max-line-length
            url: 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFyaWdlcnIiLCJhIjoiY2l6NDgxeDluMDAxcjJ3cGozOW1tZnV0NCJ9.Eb2mDsjDBmza-uhme0TLSA'
        }),
        visible: false
    })

    mapView = new View({
        center: fromLonLat([14.342308044433596, 58.05081693924278]),
        zoom: 12
    });

    // STYLES

    whiteStroke = new Stroke({
        color: 'white'
    });

    blueStroke = new Stroke({
        color: 'blue'
    });

    purpleFill = new Fill({
        color: 'rgb(63, 81, 181, .6)'
    });

    pinkFill = new Fill({
        color: 'rgba(238, 82, 163)'
    });

    yellowFill = new Fill({
        color: 'rgba(236, 240, 24)'
    });

    farmStyle = new Style({
        fill: this.pinkFill,
        stroke: this.whiteStroke
    });

    annatStyle = new Style({
        fill: this.yellowFill,
        stroke: this.whiteStroke
    });

    selectedStyle = new Style({
        fill: this.purpleFill,
        stroke: this.blueStroke
    });


}
