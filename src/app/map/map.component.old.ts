// import { Component, AfterViewInit, HostBinding } from '@angular/core';
// import 'ol/ol.css';
// import Map from 'ol/Map';
// import View from 'ol/View';
// import TileLayer from 'ol/layer/Tile';
// import { fromLonLat, toLonLat } from 'ol/proj';
// import OSM from 'ol/source/OSM';
// import GeoJSON from 'ol/format/GeoJSON';
// import VectorLayer from 'ol/layer/Vector';
// import VectorSource from 'ol/source/Vector';
// import Modify from 'ol/interaction/Modify';
// import Draw from 'ol/interaction/Draw';
// import GeometryType from 'ol/geom/GeometryType';
// import Snap from 'ol/interaction/Snap';
// import { Style, Fill, Stroke } from 'ol/style';
// import Overlay from 'ol/Overlay';
// import Select from 'ol/interaction/Select';
// import { JordbruksblockService } from '../jordbruksblock.service';
// import { Jordbruksblock } from '../models/jordbruksblock.model';
// import { toStringHDMS } from 'ol/coordinate.js';
// import { asArray as colorAsArray } from 'ol/color.js';
// import { log } from 'util';
// import { Collection, Feature } from 'ol';

// @Component({
//   selector: 'app-map',
//   templateUrl: './map.component.html',
//   styleUrls: ['./map.component.css']
// })

// export class MapComponent implements AfterViewInit {

//   constructor(private jordbruksblockService: JordbruksblockService) { }

//   // blocks: Jordbruksblock[];
//   blocks: any;

//   popupContainer: any;
//   popupContent: any;
//   popupCloser: any;
//   editPropBtn: any;

//   map = new Map({});

//   osmTileLayer = new TileLayer({
//     preload: 4,
//     opacity: .5,
//     source: new OSM()
//   });

//   // visingsoData = new VectorSource({
//   //   format: new GeoJSON(),
//   //   url: './assets/data/VisingsoJordbruksblockCRS84.geojson'
//   // });

//   geojsonFormat = new GeoJSON({ featureProjection: 'EPSG:3857' });

//   whiteStroke = new Stroke({
//     color: 'white'
//   });

//   pinkFill = new Fill({
//     color: 'rgba(238, 82, 163)'
//   });

//   yellowFill = new Fill({
//     color: 'rgba(236, 240, 24)'
//   });

//   farmStyle = new Style({
//     fill: this.pinkFill,
//     stroke: this.whiteStroke
//   });

//   annatStyle = new Style({
//     fill: this.yellowFill,
//     stroke: this.whiteStroke
//   });

//   // modifyInteraction = new Modify({
//   //   source: this.visingsoData
//   // });

//   // drawInteraction = new Draw({
//   //   type: GeometryType.POLYGON,
//   //   source: this.visingsoData
//   // });

//   // snapInteraction = new Snap({
//   //   source: this.visingsoData
//   // });

//   // to do - add style option for select
//   selectInteraction = new Select(
//     // {style: mystyleobject}
//   );

//   popupoverlay = new Overlay({
//     autoPan: true,
//     autoPanAnimation: {
//       duration: 250
//     }
//   });

//   stylefunction = (feature: any) => {
//     if (feature.get('AGOSLAG') === undefined) {
//       return this.annatStyle;
//     }
//     return feature.get('AGOSLAG').toUpperCase() === 'AKER' ? this.farmStyle : this.annatStyle;
//   }

//   // stylefunction = (feature: any) => {
//   //   if (feature.get('KATEGORI') === undefined) {
//   //     return this.annatStyle;
//   //   }
//   //   return feature.get('KATEGORI').toUpperCase() === 'GÅRD\/MILJÖ' ? this.farmStyle : this.annatStyle;
//   // }

//   // tslint:disable-next-line: member-ordering
//   // visingsoLayer = new VectorLayer({
//   //   source: this.visingsoData,
//   //   style: this.stylefunction
//   // });

//   onSingleClick = () => {

//     // console.log(this.selectInteraction.getFeatures().getKeys());
//     console.log(this.selectInteraction.getFeatures().item(0));
//     // console.log(this.selectInteraction.getActive());
//     // console.log(this.selectInteraction.getKeys());

//     // const feature = this.map.forEachFeatureAtPixel(evt.pixel,
//     //   (selfeature, layer) => {
//     //     return selfeature;
//     //   });
//     // if (feature) {
//     //   let text = '<h3>ID: ' + feature.get('BLOCKID') + '</h3>';
//     //   text += '<h5>Agoslag: ' + feature.get('AGOSLAG') + '</h5>';
//     //   text += '<h5>Kategori: ' + feature.get('KATEGORI') + '</h5>';
//     //   text += '<h5>Areal: ' + feature.get('AREAL') + '</h5>';

//     //   this.popupContent.innerHTML = text;
//     //   const coordinate = evt.coordinate;
//     //   // const hdms = toStringHDMS(toLonLat(coordinate));
//     //   this.popupoverlay.setPosition(coordinate);
//     //   this.editPropBtn.dataset.curBlockId = feature.get('BLOCKID');
//     // }
//   }

//   search(blockid: string): void {
//     // this.visingsoData.forEachFeature((feature) => {
//     //   if (feature.get('BLOCKID') === blockid) {
//     //     // features.push(feature);
//     //     this.map.addOverlay(this.popupoverlay);
//     //     const selectedFeature = feature.getGeometry();
//     //   }
//     // });
//   }

//   reset(): void {
//     // this.map.un('singleclick', this.onSingleClick);
//     // this.map.removeOverlay(this.popupoverlay);
//     // this.visingsoData.clear();
//   }

//   save() {
//     // const download = document.getElementById('download');
//     // visingsoData.on('change', () => {
//     //   const features = visingsoData.getFeatures();
//     //   const json = format.writeFeatures(features);
//     //   download.setAttribute('href', 'data:text/json;charset=utf-8,' + json);
//     // });
//     // }
//   }

//   edit(): void {
//     // this.map.removeInteraction(this.selectInteraction);
//     // this.map.removeOverlay(this.popupoverlay);
//     // this.map.un('singleclick', this.onSingleClick);
//     // this.map.addInteraction(this.modifyInteraction);
//     // this.map.addInteraction(this.drawInteraction);
//     // this.map.addInteraction(this.snapInteraction);
//     // this.map.on('change', this.onChange);
//     // this.map.on('featuremodified', this.onChange);
//     // this.visingsoLayer.on('change', this.onChange);
//     // this.visingsoLayer.on('change', this.onChange);
//     // this.visingsoData.on('featuremodified', this.onChange);
//     // this.modifyInteraction.on('change', this.onChange);
//   }

//   onChange = (evt) => {
//     console.log(evt);
//     console.log(evt.target);
//     console.log(evt.type, evt.feature ? evt.feature.id : evt.components);
//   }

//   stopediting(): void {
//     // this.map.removeInteraction(this.modifyInteraction);
//     // this.map.removeInteraction(this.drawInteraction);
//     // this.map.removeInteraction(this.snapInteraction);
//   }

//   identify(): void {
//     this.map.addInteraction(this.selectInteraction);
//     // this.map.removeInteraction(this.modifyInteraction);
//     // this.map.removeInteraction(this.drawInteraction);
//     // this.map.removeInteraction(this.snapInteraction);
//     // this.map.addOverlay(this.popupoverlay);
//     this.selectInteraction.on('select', () => console.log(this.selectInteraction.getFeatures().item(0).getGeometry()));
//     this.selectInteraction.on('select', () => console.log(this.selectInteraction.getFeatures().item(0).getProperties()));
//     // this.map.on('singleclick', this.onSingleClick);
//   }

//   editProp(evt) {
//     console.log(evt);
//     console.log(this.editPropBtn.dataset.curBlockId);

//   }

//   updateTileOpacity(opacity: number) {
//     this.osmTileLayer.setOpacity(opacity);
//   }

//   updateBlockOpacity(opacity: number) {
//     // this.visingsoLayer.setOpacity(opacity);
//   }

//   ngAfterViewInit() {

//     this.popupContainer = document.getElementById('popup');
//     this.popupContent = document.getElementById('popup-content');
//     this.popupCloser = document.getElementById('popup-closer');
//     this.editPropBtn = document.getElementById('editPrpBtn');


//     this.popupCloser.onclick = () => {
//       this.popupoverlay.setPosition(undefined);
//       this.popupCloser.blur();
//       return false;
//     };

//     this.popupoverlay.setElement(this.popupContainer);

//     this.jordbruksblockService.getBlocks()
//       .subscribe((data) => {
//         const newblocks = {
//           type: 'FeatureCollection',
//           features: data
//         };
//         const geojsonFormat = new GeoJSON({ featureProjection: 'EPSG:3857' });
//         const visingsoData = new VectorSource({
//           features: geojsonFormat.readFeatures(newblocks)
//         });

//         const visingsoLayer = new VectorLayer({
//           source: visingsoData,
//           style: this.stylefunction
//         });
//         this.map.setTarget('map');
//         this.map.addLayer(this.osmTileLayer);
//         this.map.addLayer(visingsoLayer);
//         this.map.setView(new View({
//           center: fromLonLat([14.342308044433596, 58.05081693924278]),
//           zoom: 12
//         }));

//       });

//   }
//   // console.log(data);
//   // const geoData = JSON.stringify(data);
//   // console.log(typeof (geoData));
//   // console.log(geoData);

//   // const geoData = this.geojsonFormat.readFeatures(data);
//   // console.log(geoData);

//   // const geoColl = new Collection(data)

//   // const visingsoData = new VectorSource({
//   //   format: new GeoJSON(),
//   //   features: geoData
//   // });
//   // const visingsoLayer = new VectorLayer({
//   //   source: visingsoData,
//   //   style: this.stylefunction
//   // });
//   // this.map.setTarget('map');
//   // this.map.addLayer(this.osmTileLayer);
//   // this.map.addLayer(visingsoLayer);
//   // this.map.setView(new View({
//   //   center: fromLonLat([14.342308044433596, 58.05081693924278]),
//   //   zoom: 12
//   // }));
//   // this.identify();
//   // }));

// }

// // // @ts-ignore
// // let pinkColorArray = colorAsArray(this.pinkFill.getColor());
// // // @ts-ignore
// // let yellowColorArray = colorAsArray(this.yellowFill.getColor());
// // pinkColorArray[3] = opacity;
// // yellowColorArray[3] = opacity;

// // this.pinkFill.setColor(pinkColorArray);
// // this.yellowFill.setColor(yellowColorArray);


// // const geometry = feature.getGeometry();
// // const properties = feature.getGeometry().getProperties();
// // const area = feature.getGeometry().getArea();
// // const firstCoord = feature.getGeometry().getFirstCoordinate();
// // const interiorPts = feature.getGeometry().getInteriorPoints().getCoordinates();
// // interiorPts.pop();

// // console.log(geometry);
// // console.log(properties);
// // console.log(area);
// // console.log(firstCoord);
// // console.log(interiorPts);


// // import DragAndDrop from 'ol/interaction/DragAndDrop';
// // import FeatureFormat from 'ol/format/Feature';

// // import chickenData from '..assets/data/LanWithChickensV2.json';
// // import {Circle as Fill, Stroke, Style, Text} from 'ol/style.js';
// // import {
// //   defaults as defaultControls,
// //   Attribution,
// //   FullScreen,
// //   ScaleLine,
// //   ZoomToExtent
// // } from 'ol/control.js';
// // import {
// //   defaults as defaultInteractions,
// //   DragRotateAndZoom
// // } from 'ol/interaction.js';

// // const source = new VectorSource();

//     // const layer = new VectorLayer({
//     //   source
//     // });
//     // map.addLayer(layer);

//     // map.addInteraction(new DragAndDrop({
//     //   source,
//     //   formatConstructors: [GeoJSON]
//     //   // formatConstructors: [new GeoJSON()]
//     // }));



//     //   const gothenburg = fromLonLat([11.981277465820314, 57.70249628788332]);

//     //   const view = new View({
//     //     center: gothenburg,
//     //     zoom: 5
//     //   });

//     //   const vectorSource = new VectorSource({
//     //     features: (new GeoJSON()).readFeatures(chickenData)
//     //   });

//     //   const vectorLayer = new VectorLayer({
//     //     source: vectorSource,
//     //     // style
//     //   });

//     //   console.log(vectorSource.getExtent());
//     //   console.log(vectorSource.getFeatures());

//     //   const map = new Map({
//     //     target: 'map',
//     //     layers: [
//     //       new TileLayer({
//     //         preload: 4,
//     //         source: new OSM()
//     //       }),
//     //       vectorLayer
//     //     ],
//     //     view
//     //   });
