import { Style, Fill, Stroke } from 'ol/style';
import GeoJSON from 'ol/format/GeoJSON';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { View } from 'ol';
import { fromLonLat } from 'ol/proj';


export class MapDefaults {

    geojsonFormat = new GeoJSON({ featureProjection: 'EPSG:3857' });

    osmTileLayer = new TileLayer({
        preload: 4,
        opacity: .5,
        source: new OSM()
    });

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
        color: 'purple'
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
