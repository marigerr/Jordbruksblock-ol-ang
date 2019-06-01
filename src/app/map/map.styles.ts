import { Style, Fill, Stroke } from 'ol/style';

export class MapStyle {

    whiteStroke = new Stroke({
        color: 'white'
    });

    blueStroke = new Stroke({
        color: 'blue'
    });

    whiteFill = new Fill({
        color: 'black'
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
        fill: this.whiteFill,
        stroke: this.blueStroke
    });
}
