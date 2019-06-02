(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/ol/ol.css":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/ol/ol.css ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".ol-box {\n  box-sizing: border-box;\n  border-radius: 2px;\n  border: 2px solid blue;\n}\n\n.ol-mouse-position {\n  top: 8px;\n  right: 8px;\n  position: absolute;\n}\n\n.ol-scale-line {\n  background: rgba(0,60,136,0.3);\n  border-radius: 4px;\n  bottom: 8px;\n  left: 8px;\n  padding: 2px;\n  position: absolute;\n}\n\n.ol-scale-line-inner {\n  border: 1px solid #eee;\n  border-top: none;\n  color: #eee;\n  font-size: 10px;\n  text-align: center;\n  margin: 1px;\n  will-change: contents, width;\n}\n\n.ol-overlay-container {\n  will-change: left,right,top,bottom;\n}\n\n.ol-unsupported {\n  display: none;\n}\n\n.ol-viewport, .ol-unselectable {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n}\n\n.ol-selectable {\n  -webkit-touch-callout: default;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}\n\n.ol-grabbing {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n\n.ol-grab {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.ol-control {\n  position: absolute;\n  background-color: rgba(255,255,255,0.4);\n  border-radius: 4px;\n  padding: 2px;\n}\n\n.ol-control:hover {\n  background-color: rgba(255,255,255,0.6);\n}\n\n.ol-zoom {\n  top: .5em;\n  left: .5em;\n}\n\n.ol-rotate {\n  top: .5em;\n  right: .5em;\n  transition: opacity .25s linear, visibility 0s linear;\n}\n\n.ol-rotate.ol-hidden {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity .25s linear, visibility 0s linear .25s;\n}\n\n.ol-zoom-extent {\n  top: 4.643em;\n  left: .5em;\n}\n\n.ol-full-screen {\n  right: .5em;\n  top: .5em;\n}\n\n@media print {\n  .ol-control {\n    display: none;\n  }\n}\n\n.ol-control button {\n  display: block;\n  margin: 1px;\n  padding: 0;\n  color: white;\n  font-size: 1.14em;\n  font-weight: bold;\n  text-decoration: none;\n  text-align: center;\n  height: 1.375em;\n  width: 1.375em;\n  line-height: .4em;\n  background-color: rgba(0,60,136,0.5);\n  border: none;\n  border-radius: 2px;\n}\n\n.ol-control button::-moz-focus-inner {\n  border: none;\n  padding: 0;\n}\n\n.ol-zoom-extent button {\n  line-height: 1.4em;\n}\n\n.ol-compass {\n  display: block;\n  font-weight: normal;\n  font-size: 1.2em;\n  will-change: transform;\n}\n\n.ol-touch .ol-control button {\n  font-size: 1.5em;\n}\n\n.ol-touch .ol-zoom-extent {\n  top: 5.5em;\n}\n\n.ol-control button:hover,\n.ol-control button:focus {\n  text-decoration: none;\n  background-color: rgba(0,60,136,0.7);\n}\n\n.ol-zoom .ol-zoom-in {\n  border-radius: 2px 2px 0 0;\n}\n\n.ol-zoom .ol-zoom-out {\n  border-radius: 0 0 2px 2px;\n}\n\n.ol-attribution {\n  text-align: right;\n  bottom: .5em;\n  right: .5em;\n  max-width: calc(100% - 1.3em);\n}\n\n.ol-attribution ul {\n  margin: 0;\n  padding: 0 .5em;\n  font-size: .7rem;\n  line-height: 1.375em;\n  color: #000;\n  text-shadow: 0 0 2px #fff;\n}\n\n.ol-attribution li {\n  display: inline;\n  list-style: none;\n  line-height: inherit;\n}\n\n.ol-attribution li:not(:last-child):after {\n  content: \" \";\n}\n\n.ol-attribution img {\n  max-height: 2em;\n  max-width: inherit;\n  vertical-align: middle;\n}\n\n.ol-attribution ul, .ol-attribution button {\n  display: inline-block;\n}\n\n.ol-attribution.ol-collapsed ul {\n  display: none;\n}\n\n.ol-attribution:not(.ol-collapsed) {\n  background: rgba(255,255,255,0.8);\n}\n\n.ol-attribution.ol-uncollapsible {\n  bottom: 0;\n  right: 0;\n  border-radius: 4px 0 0;\n  height: 1.1em;\n  line-height: 1em;\n}\n\n.ol-attribution.ol-uncollapsible img {\n  margin-top: -.2em;\n  max-height: 1.6em;\n}\n\n.ol-attribution.ol-uncollapsible button {\n  display: none;\n}\n\n.ol-zoomslider {\n  top: 4.5em;\n  left: .5em;\n  height: 200px;\n}\n\n.ol-zoomslider button {\n  position: relative;\n  height: 10px;\n}\n\n.ol-touch .ol-zoomslider {\n  top: 5.5em;\n}\n\n.ol-overviewmap {\n  left: 0.5em;\n  bottom: 0.5em;\n}\n\n.ol-overviewmap.ol-uncollapsible {\n  bottom: 0;\n  left: 0;\n  border-radius: 0 4px 0 0;\n}\n\n.ol-overviewmap .ol-overviewmap-map,\n.ol-overviewmap button {\n  display: inline-block;\n}\n\n.ol-overviewmap .ol-overviewmap-map {\n  border: 1px solid #7b98bc;\n  height: 150px;\n  margin: 2px;\n  width: 150px;\n}\n\n.ol-overviewmap:not(.ol-collapsed) button{\n  bottom: 1px;\n  left: 2px;\n  position: absolute;\n}\n\n.ol-overviewmap.ol-collapsed .ol-overviewmap-map,\n.ol-overviewmap.ol-uncollapsible button {\n  display: none;\n}\n\n.ol-overviewmap:not(.ol-collapsed) {\n  background: rgba(255,255,255,0.8);\n}\n\n.ol-overviewmap-box {\n  border: 2px dotted rgba(0,60,136,0.7);\n}\n\n.ol-overviewmap .ol-overviewmap-box:hover {\n  cursor: move;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9vbC9vbC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFFBQVE7RUFDUixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCw0QkFBNEI7QUFDOUI7O0FBQ0E7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLDBDQUEwQztBQUM1Qzs7QUFDQTtFQUNFLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSx3QkFBd0I7RUFFeEIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtFQUVwQixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUNBO0VBQ0UsU0FBUztFQUNULFdBQVc7RUFDWCxxREFBcUQ7QUFDdkQ7O0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLDBEQUEwRDtBQUM1RDs7QUFDQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsU0FBUztBQUNYOztBQUNBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUNBOztFQUVFLHFCQUFxQjtFQUNyQixvQ0FBb0M7QUFDdEM7O0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7O0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7O0FBR0E7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFdBQVc7RUFDWCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsUUFBUTtFQUNSLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsT0FBTztFQUNQLHdCQUF3QjtBQUMxQjs7QUFDQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFDQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBQ0E7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoibm9kZV9tb2R1bGVzL29sL29sLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vbC1ib3gge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XG59XG5cbi5vbC1tb3VzZS1wb3NpdGlvbiB7XG4gIHRvcDogOHB4O1xuICByaWdodDogOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5vbC1zY2FsZS1saW5lIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDYwLDEzNiwwLjMpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvdHRvbTogOHB4O1xuICBsZWZ0OiA4cHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLm9sLXNjYWxlLWxpbmUtaW5uZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBib3JkZXItdG9wOiBub25lO1xuICBjb2xvcjogI2VlZTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMXB4O1xuICB3aWxsLWNoYW5nZTogY29udGVudHMsIHdpZHRoO1xufVxuLm9sLW92ZXJsYXktY29udGFpbmVyIHtcbiAgd2lsbC1jaGFuZ2U6IGxlZnQscmlnaHQsdG9wLGJvdHRvbTtcbn1cblxuLm9sLXVuc3VwcG9ydGVkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5vbC12aWV3cG9ydCwgLm9sLXVuc2VsZWN0YWJsZSB7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsMCwwLDApO1xufVxuLm9sLXNlbGVjdGFibGUge1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IGRlZmF1bHQ7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbiAgdXNlci1zZWxlY3Q6IHRleHQ7XG59XG4ub2wtZ3JhYmJpbmcge1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7XG4gIGN1cnNvcjogLW1vei1ncmFiYmluZztcbiAgY3Vyc29yOiBncmFiYmluZztcbn1cbi5vbC1ncmFiIHtcbiAgY3Vyc29yOiBtb3ZlO1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcbiAgY3Vyc29yOiAtbW96LWdyYWI7XG4gIGN1cnNvcjogZ3JhYjtcbn1cbi5vbC1jb250cm9sIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMnB4O1xufVxuLm9sLWNvbnRyb2w6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XG59XG4ub2wtem9vbSB7XG4gIHRvcDogLjVlbTtcbiAgbGVmdDogLjVlbTtcbn1cbi5vbC1yb3RhdGUge1xuICB0b3A6IC41ZW07XG4gIHJpZ2h0OiAuNWVtO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4yNXMgbGluZWFyLCB2aXNpYmlsaXR5IDBzIGxpbmVhcjtcbn1cbi5vbC1yb3RhdGUub2wtaGlkZGVuIHtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4yNXMgbGluZWFyLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAuMjVzO1xufVxuLm9sLXpvb20tZXh0ZW50IHtcbiAgdG9wOiA0LjY0M2VtO1xuICBsZWZ0OiAuNWVtO1xufVxuLm9sLWZ1bGwtc2NyZWVuIHtcbiAgcmlnaHQ6IC41ZW07XG4gIHRvcDogLjVlbTtcbn1cbkBtZWRpYSBwcmludCB7XG4gIC5vbC1jb250cm9sIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5vbC1jb250cm9sIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDFweDtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuMTRlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEuMzc1ZW07XG4gIHdpZHRoOiAxLjM3NWVtO1xuICBsaW5lLWhlaWdodDogLjRlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDYwLDEzNiwwLjUpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5vbC1jb250cm9sIGJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cbi5vbC16b29tLWV4dGVudCBidXR0b24ge1xuICBsaW5lLWhlaWdodDogMS40ZW07XG59XG4ub2wtY29tcGFzcyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEuMmVtO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xufVxuLm9sLXRvdWNoIC5vbC1jb250cm9sIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG4ub2wtdG91Y2ggLm9sLXpvb20tZXh0ZW50IHtcbiAgdG9wOiA1LjVlbTtcbn1cbi5vbC1jb250cm9sIGJ1dHRvbjpob3Zlcixcbi5vbC1jb250cm9sIGJ1dHRvbjpmb2N1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDYwLDEzNiwwLjcpO1xufVxuLm9sLXpvb20gLm9sLXpvb20taW4ge1xuICBib3JkZXItcmFkaXVzOiAycHggMnB4IDAgMDtcbn1cbi5vbC16b29tIC5vbC16b29tLW91dCB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAycHggMnB4O1xufVxuXG5cbi5vbC1hdHRyaWJ1dGlvbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBib3R0b206IC41ZW07XG4gIHJpZ2h0OiAuNWVtO1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDEuM2VtKTtcbn1cblxuLm9sLWF0dHJpYnV0aW9uIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIC41ZW07XG4gIGZvbnQtc2l6ZTogLjdyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjM3NWVtO1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1zaGFkb3c6IDAgMCAycHggI2ZmZjtcbn1cbi5vbC1hdHRyaWJ1dGlvbiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG4ub2wtYXR0cmlidXRpb24gbGk6bm90KDpsYXN0LWNoaWxkKTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xufVxuLm9sLWF0dHJpYnV0aW9uIGltZyB7XG4gIG1heC1oZWlnaHQ6IDJlbTtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLm9sLWF0dHJpYnV0aW9uIHVsLCAub2wtYXR0cmlidXRpb24gYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLm9sLWF0dHJpYnV0aW9uLm9sLWNvbGxhcHNlZCB1bCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ub2wtYXR0cmlidXRpb246bm90KC5vbC1jb2xsYXBzZWQpIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xufVxuLm9sLWF0dHJpYnV0aW9uLm9sLXVuY29sbGFwc2libGUge1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBib3JkZXItcmFkaXVzOiA0cHggMCAwO1xuICBoZWlnaHQ6IDEuMWVtO1xuICBsaW5lLWhlaWdodDogMWVtO1xufVxuLm9sLWF0dHJpYnV0aW9uLm9sLXVuY29sbGFwc2libGUgaW1nIHtcbiAgbWFyZ2luLXRvcDogLS4yZW07XG4gIG1heC1oZWlnaHQ6IDEuNmVtO1xufVxuLm9sLWF0dHJpYnV0aW9uLm9sLXVuY29sbGFwc2libGUgYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm9sLXpvb21zbGlkZXIge1xuICB0b3A6IDQuNWVtO1xuICBsZWZ0OiAuNWVtO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuLm9sLXpvb21zbGlkZXIgYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwcHg7XG59XG5cbi5vbC10b3VjaCAub2wtem9vbXNsaWRlciB7XG4gIHRvcDogNS41ZW07XG59XG5cbi5vbC1vdmVydmlld21hcCB7XG4gIGxlZnQ6IDAuNWVtO1xuICBib3R0b206IDAuNWVtO1xufVxuLm9sLW92ZXJ2aWV3bWFwLm9sLXVuY29sbGFwc2libGUge1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDAgNHB4IDAgMDtcbn1cbi5vbC1vdmVydmlld21hcCAub2wtb3ZlcnZpZXdtYXAtbWFwLFxuLm9sLW92ZXJ2aWV3bWFwIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5vbC1vdmVydmlld21hcCAub2wtb3ZlcnZpZXdtYXAtbWFwIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzdiOThiYztcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luOiAycHg7XG4gIHdpZHRoOiAxNTBweDtcbn1cbi5vbC1vdmVydmlld21hcDpub3QoLm9sLWNvbGxhcHNlZCkgYnV0dG9ue1xuICBib3R0b206IDFweDtcbiAgbGVmdDogMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ub2wtb3ZlcnZpZXdtYXAub2wtY29sbGFwc2VkIC5vbC1vdmVydmlld21hcC1tYXAsXG4ub2wtb3ZlcnZpZXdtYXAub2wtdW5jb2xsYXBzaWJsZSBidXR0b24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLm9sLW92ZXJ2aWV3bWFwOm5vdCgub2wtY29sbGFwc2VkKSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcbn1cbi5vbC1vdmVydmlld21hcC1ib3gge1xuICBib3JkZXI6IDJweCBkb3R0ZWQgcmdiYSgwLDYwLDEzNiwwLjcpO1xufVxuXG4ub2wtb3ZlcnZpZXdtYXAgLm9sLW92ZXJ2aWV3bWFwLWJveDpob3ZlciB7XG4gIGN1cnNvcjogbW92ZTtcbn1cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/ol/ol.css":
/*!********************************!*\
  !*** ./node_modules/ol/ol.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../postcss-loader/src??embedded!./ol.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/ol/ol.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-map></app-map>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Jordbruksblock';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _static_sidebar_static_sidebar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./static-sidebar/static-sidebar.component */ "./src/app/static-sidebar/static-sidebar.component.ts");
/* harmony import */ var _jordbruksblock_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./jordbruksblock.service */ "./src/app/jordbruksblock.service.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_13__["MapComponent"],
                _static_sidebar_static_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["StaticSidebarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"]
            ],
            providers: [_jordbruksblock_service__WEBPACK_IMPORTED_MODULE_15__["JordbruksblockService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/jordbruksblock.service.ts":
/*!*******************************************!*\
  !*** ./src/app/jordbruksblock.service.ts ***!
  \*******************************************/
/*! exports provided: JordbruksblockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JordbruksblockService", function() { return JordbruksblockService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var JordbruksblockService = /** @class */ (function () {
    function JordbruksblockService(httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        // this.baseURL = 'http://localhost:3000/features';
        this.baseURL = 'https://rectangular-water.glitch.me/api.blocks';
    }
    JordbruksblockService.prototype.getBlocks = function () {
        return this.httpClient.get(this.baseURL);
    };
    JordbruksblockService.prototype.getBlock = function (blockid) {
        console.log(blockid);
        return this.httpClient.get(this.baseURL + '/' + blockid);
    };
    JordbruksblockService.prototype.saveBlock = function (block) {
        return this.httpClient.put(this.baseURL, block, this.httpOptions);
    };
    JordbruksblockService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], JordbruksblockService);
    return JordbruksblockService;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex {\r\n  display: flex;\r\n  height: 100%;\r\n}\r\n\r\n#map {\r\n  width: 75%;\r\n  height: 100%;\r\n}\r\n\r\napp-static-sidebar {\r\n  margin: 1rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9tYXAvbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiNtYXAge1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5hcHAtc3RhdGljLXNpZGViYXIge1xyXG4gIG1hcmdpbjogMXJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex\">\n    <div id=\"map\"></div>\n    <app-static-sidebar \n    [selectedBlock]='selectedBlock' \n    (blockidChange)='displaySelected($event)' \n    (editFeature)='addEditInteraction($event)'></app-static-sidebar>\n</div>\n\n\n\n\n<!-- <app-static-sidebar [mapcomp]=\"mapcomp\"></app-static-sidebar> -->\n\n<!-- <div id=\"popup\" class=\"ol-popup\">\n    <a href=\"#\" id=\"popup-closer\" class=\"ol-popup-closer\" ></a>\n    <div id=\"popup-content\"></div>\n    <button id=\"editPrpBtn\" mat-raised-button (click)=editProp($event)>Edit Prop</button>\n</div> -->"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ol_ol_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/ol.css */ "./node_modules/ol/ol.css");
/* harmony import */ var ol_ol_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ol_ol_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/Map */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_layer_Vector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/layer/Vector */ "./node_modules/ol/layer/Vector.js");
/* harmony import */ var ol_source_Vector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/source/Vector */ "./node_modules/ol/source/Vector.js");
/* harmony import */ var _map_defaults__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map.defaults */ "./src/app/map/map.defaults.ts");
/* harmony import */ var ol_interaction_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/interaction/Select */ "./node_modules/ol/interaction/Select.js");
/* harmony import */ var ol_control_ScaleLine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/control/ScaleLine */ "./node_modules/ol/control/ScaleLine.js");
/* harmony import */ var _jordbruksblock_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../jordbruksblock.service */ "./src/app/jordbruksblock.service.ts");
/* harmony import */ var ol_extent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/extent */ "./node_modules/ol/extent.js");
/* harmony import */ var ol__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");
/* harmony import */ var ol_interaction_Modify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/interaction/Modify */ "./node_modules/ol/interaction/Modify.js");













var MapComponent = /** @class */ (function () {
    function MapComponent(jordbruksblockService) {
        var _this = this;
        this.jordbruksblockService = jordbruksblockService;
        this.selectedBlock = {
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
        this.featureCollection = new ol__WEBPACK_IMPORTED_MODULE_11__["Collection"]([]);
        this.mapDefaults = new _map_defaults__WEBPACK_IMPORTED_MODULE_6__["MapDefaults"]();
        this.selectInteraction = new ol_interaction_Select__WEBPACK_IMPORTED_MODULE_7__["default"]({ style: this.mapDefaults.selectedStyle });
        this.map = new ol_Map__WEBPACK_IMPORTED_MODULE_3__["default"]({
            view: this.mapDefaults.mapView,
            controls: [new ol_control_ScaleLine__WEBPACK_IMPORTED_MODULE_8__["default"]()],
        });
        this.geojsonData = {
            type: 'FeatureCollection',
            features: {}
        };
        this.visingsoData = new ol_source_Vector__WEBPACK_IMPORTED_MODULE_5__["default"]({});
        this.stylefunction = function (feature) {
            if (feature.get('AGOSLAG') === undefined) {
                return _this.mapDefaults.annatStyle;
            }
            return feature.get('AGOSLAG').toUpperCase() === 'AKER' ? _this.mapDefaults.farmStyle : _this.mapDefaults.annatStyle;
        };
    }
    MapComponent.prototype.displaySelected = function (block) {
        var _this = this;
        this.selectInteraction.set('features', []);
        if (this.selectedFeature) {
            this.selectedFeature.setStyle(this.stylefunction);
        }
        this.visingsoData.forEachFeature(function (feature) {
            if (feature.get('BLOCKID') === block.properties.BLOCKID) {
                feature.setStyle(_this.mapDefaults.selectedStyle);
                var ext = feature.getGeometry().getExtent();
                var center = Object(ol_extent__WEBPACK_IMPORTED_MODULE_10__["getCenter"])(ext);
                _this.mapDefaults.mapView.setCenter(center);
                _this.mapDefaults.mapView.setZoom(13);
                _this.selectedBlock = block;
                _this.selectedFeature = feature;
            }
        });
    };
    MapComponent.prototype.addSelectInteraction = function () {
        var _this = this;
        this.map.addInteraction(this.selectInteraction);
        this.selectInteraction.on('select', function (evt) {
            if (evt.selected[0]) {
                // @ts-ignore
                _this.selectedBlock = _this.mapDefaults.geojsonFormat.writeFeatureObject(evt.selected[0]);
                _this.selectedFeature = evt.selected[0];
            }
        });
    };
    MapComponent.prototype.addEditInteraction = function (editing) {
        var _this = this;
        var modifyInteraction = new ol_interaction_Modify__WEBPACK_IMPORTED_MODULE_12__["default"]({
            features: new ol__WEBPACK_IMPORTED_MODULE_11__["Collection"]([this.selectedFeature])
        });
        if (editing) {
            // add modify interaction on selected feature
            this.map.addInteraction(modifyInteraction);
            modifyInteraction.on('modifyend', function (evt) {
                // @ts-ignore
                _this.selectedBlock = _this.mapDefaults.geojsonFormat.writeFeatureObject(evt.features.getArray()[0]);
                _this.selectedFeature = evt.features.getArray()[0];
            });
        }
        else {
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
    };
    MapComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.jordbruksblockService.getBlocks()
            .subscribe(function (data) {
            _this.geojsonData.features = data;
            _this.visingsoData.addFeatures(_this.mapDefaults.geojsonFormat.readFeatures(_this.geojsonData));
            var visingsoLayer = new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_4__["default"]({
                source: _this.visingsoData,
                style: _this.stylefunction
            });
            _this.map.addLayer(_this.mapDefaults.osmTileLayer);
            _this.map.addLayer(visingsoLayer);
            _this.map.setTarget('map');
            _this.addSelectInteraction();
        });
    };
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_jordbruksblock_service__WEBPACK_IMPORTED_MODULE_9__["JordbruksblockService"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/map/map.defaults.ts":
/*!*************************************!*\
  !*** ./src/app/map/map.defaults.ts ***!
  \*************************************/
/*! exports provided: MapDefaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapDefaults", function() { return MapDefaults; });
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/style */ "./node_modules/ol/style.js");
/* harmony import */ var ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/format/GeoJSON */ "./node_modules/ol/format/GeoJSON.js");
/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/layer/Tile */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_source_OSM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/source/OSM */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var ol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");






var MapDefaults = /** @class */ (function () {
    function MapDefaults() {
        this.geojsonFormat = new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_1__["default"]({ featureProjection: 'EPSG:3857' });
        this.osmTileLayer = new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_2__["default"]({
            preload: 4,
            opacity: .5,
            source: new ol_source_OSM__WEBPACK_IMPORTED_MODULE_3__["default"]()
        });
        this.mapView = new ol__WEBPACK_IMPORTED_MODULE_4__["View"]({
            center: Object(ol_proj__WEBPACK_IMPORTED_MODULE_5__["fromLonLat"])([14.342308044433596, 58.05081693924278]),
            zoom: 12
        });
        // STYLES
        this.whiteStroke = new ol_style__WEBPACK_IMPORTED_MODULE_0__["Stroke"]({
            color: 'white'
        });
        this.blueStroke = new ol_style__WEBPACK_IMPORTED_MODULE_0__["Stroke"]({
            color: 'blue'
        });
        this.purpleFill = new ol_style__WEBPACK_IMPORTED_MODULE_0__["Fill"]({
            color: 'purple'
        });
        this.pinkFill = new ol_style__WEBPACK_IMPORTED_MODULE_0__["Fill"]({
            color: 'rgba(238, 82, 163)'
        });
        this.yellowFill = new ol_style__WEBPACK_IMPORTED_MODULE_0__["Fill"]({
            color: 'rgba(236, 240, 24)'
        });
        this.farmStyle = new ol_style__WEBPACK_IMPORTED_MODULE_0__["Style"]({
            fill: this.pinkFill,
            stroke: this.whiteStroke
        });
        this.annatStyle = new ol_style__WEBPACK_IMPORTED_MODULE_0__["Style"]({
            fill: this.yellowFill,
            stroke: this.whiteStroke
        });
        this.selectedStyle = new ol_style__WEBPACK_IMPORTED_MODULE_0__["Style"]({
            fill: this.purpleFill,
            stroke: this.blueStroke
        });
    }
    return MapDefaults;
}());



/***/ }),

/***/ "./src/app/models/jordbruksblock.model.ts":
/*!************************************************!*\
  !*** ./src/app/models/jordbruksblock.model.ts ***!
  \************************************************/
/*! exports provided: Jordbruksblock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jordbruksblock", function() { return Jordbruksblock; });
var Jordbruksblock = /** @class */ (function () {
    function Jordbruksblock() {
    }
    return Jordbruksblock;
}());



/***/ }),

/***/ "./src/app/static-sidebar/static-sidebar.component.css":
/*!*************************************************************!*\
  !*** ./src/app/static-sidebar/static-sidebar.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex {\r\n  display: flex;\r\n}\r\n\r\n.example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n.example-container > * {\r\n    width: 100%;\r\n  }\r\n\r\nbutton {\r\n    margin-top: 1rem;\r\n    margin-right: .5rem;\r\n    min-width: 6rem;\r\n    flex-grow: 1;\r\n    flex-basis: 0;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGljLXNpZGViYXIvc3RhdGljLXNpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSxXQUFXO0VBQ2I7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvc3RhdGljLXNpZGViYXIvc3RhdGljLXNpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogLjVyZW07XHJcbiAgICBtaW4td2lkdGg6IDZyZW07XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBmbGV4LWJhc2lzOiAwO1xyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/static-sidebar/static-sidebar.component.html":
/*!**************************************************************!*\
  !*** ./src/app/static-sidebar/static-sidebar.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"headline\">Visingsö Jordbrukblock</h1>\n\n<div class=\"example-container\">\n    <mat-form-field>\n        <input matInput readonly='{{blockIdIsReadOnly}}' [(ngModel)]=\"selectedBlock.properties.BLOCKID\" placeholder=\"Sök med Block Id\" (keyup.enter)=\"searchBlock(selectedBlock.properties.BLOCKID)\">\n        <mat-hint *ngIf=\"selectedBlock.properties.AGOSLAG ===''\">Eller klicka på kartan</mat-hint>\n    </mat-form-field>\n\n    <mat-form-field *ngIf=\"selectedBlock.properties.AGOSLAG !==''\">\n        <input matInput readonly='{{inputsReadOnly}}' [(ngModel)]=\"selectedBlock.properties.AGOSLAG\" placeholder=\"Agoslag\">\n        <!-- <input matInput readonly value={{selectedBlock.properties.AGOSLAG}} placeholder=\"Agoslag\"> -->\n    </mat-form-field>\n\n    <mat-form-field *ngIf=\"selectedBlock.properties.AREAL !== 0\">\n        <input matInput readonly [(ngModel)]=\"selectedBlock.properties.AREAL\" placeholder=\"Areal\">\n    </mat-form-field>\n\n    <mat-form-field *ngIf=\"selectedBlock.properties.KATEGORI !== ''\">\n        <input matInput readonly='{{inputsReadOnly}}' [(ngModel)]=\"selectedBlock.properties.KATEGORI\" placeholder=\"Kategori\">\n    </mat-form-field>\n    <div *ngIf=\"selectedBlock.properties.AGOSLAG ==='' && notEditing\">\n        <button  mat-raised-button color=\"primary\" (click)=submit(selectedBlock.properties.BLOCKID)>Submit</button>\n    </div>\n    <div class=\"flex\" *ngIf=\"selectedBlock.properties.AGOSLAG !=='' && notEditing\">\n        <button  mat-raised-button color=\"primary\" (click)=edit()>Edit</button>\n        <button  mat-raised-button color=\"accent\" (click)=newSearch()>New Search</button>\n    </div>\n    <div class=\"flex\" *ngIf=\"!notEditing\">\n        <button mat-raised-button color=\"warn\" (click)=cancel()>Cancel</button>\n        <button mat-raised-button color=\"primary\" (click)=save()>Save</button>\n    </div>\n</div>\n\n<!-- <button mat-raised-button (click)=edit()>Edit</button> -->\n\n\n<!-- <mat-accordion>\n    <mat-expansion-panel>\n        <mat-expansion-panel-header>\n            <mat-panel-title>\n                Edit\n            </mat-panel-title>\n        </mat-expansion-panel-header>\n        <button mat-raised-button (click)=edit()>Edit</button>\n        <button mat-raised-button (click)=stopediting()>Stop Edit</button>\n        <button mat-raised-button (click)=reset()>Reset</button>\n    </mat-expansion-panel>\n    <mat-expansion-panel>\n        <mat-expansion-panel-header>\n            <mat-panel-title>\n                Identify\n            </mat-panel-title>\n        </mat-expansion-panel-header>\n        <button mat-raised-button (click)=identify()>Identify</button>\n    </mat-expansion-panel>\n    <mat-expansion-panel>\n        <mat-expansion-panel-header>\n            <mat-panel-title>\n                Search\n            </mat-panel-title>\n        </mat-expansion-panel-header>\n        Search by block Id\n        <input type=\"text\" #box value=\"64364126210\" (keyup.enter)=\"onEnter(box.value)\">\n    </mat-expansion-panel>\n    <mat-expansion-panel>\n        <mat-expansion-panel-header>\n            <mat-panel-title>\n                Map Settings\n            </mat-panel-title>\n        </mat-expansion-panel-header>\n        <h2>Base Map Opacity: <span>{{baseSlider.value}}</span></h2>\n        <mat-slider #baseSlider (input)=tileOpChange($event) min=\"0\" max=\"1\" step=\"0.1\" tickInterval=\"auto\" value=\".5\">\n        </mat-slider>\n        <h2>Block Opacity: <span>{{blockSlider.value}}</span></h2>\n        <mat-slider #blockSlider (input)=blockOpChange($event) min=\"0\" max=\"1\" step=\"0.1\" value=\"1\"></mat-slider>\n    </mat-expansion-panel>\n</mat-accordion> -->\n\n\n\n<!-- <button (click)= submit()>Save</button> -->\n<!-- <a id=\"download\" href=\"\" download=\"features.json\">Download</a> -->"

/***/ }),

/***/ "./src/app/static-sidebar/static-sidebar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/static-sidebar/static-sidebar.component.ts ***!
  \************************************************************/
/*! exports provided: StaticSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticSidebarComponent", function() { return StaticSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_jordbruksblock_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/jordbruksblock.model */ "./src/app/models/jordbruksblock.model.ts");
/* harmony import */ var _jordbruksblock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jordbruksblock.service */ "./src/app/jordbruksblock.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");





var StaticSidebarComponent = /** @class */ (function () {
    function StaticSidebarComponent(jordbruksblockService, snackBar) {
        this.jordbruksblockService = jordbruksblockService;
        this.snackBar = snackBar;
        this.blockIdIsReadOnly = false;
        this.inputsReadOnly = true;
        this.notEditing = true;
        this.blockidChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editFeature = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    StaticSidebarComponent.prototype.ngOnChanges = function (changes) {
        var changed = changes.selectedBlock;
        if (changed.currentValue.properties.BLOCKID !== '') {
            this.blockIdIsReadOnly = true;
        }
    };
    StaticSidebarComponent.prototype.submit = function (blockid) {
        this.searchBlock(blockid);
    };
    StaticSidebarComponent.prototype.searchBlock = function (blockid) {
        var _this = this;
        this.jordbruksblockService.getBlock(blockid).subscribe(function (data) {
            console.log(data);
            _this.selectedBlock.properties = {
                BLOCKID: data.properties.BLOCKID,
                REGION: data.properties.REGION,
                AGOSLAG: data.properties.AGOSLAG,
                AREAL: data.properties.AREAL,
                KATEGORI: data.properties.KATEGORI,
            };
            _this.selectedBlock.geometry = data.geometry;
            _this.blockidChange.emit(_this.selectedBlock);
            _this.blockIdIsReadOnly = true;
        });
    };
    StaticSidebarComponent.prototype.edit = function () {
        this.inputsReadOnly = false;
        this.notEditing = false;
        this.editFeature.emit(true);
    };
    StaticSidebarComponent.prototype.newSearch = function () {
        this.selectedBlock.properties = {
            BLOCKID: '',
            REGION: '',
            AGOSLAG: '',
            AREAL: 0,
            KATEGORI: '',
        };
        this.selectedBlock.geometry = {
            type: '',
            coordinates: []
        };
        this.editFeature.emit(false);
        this.blockIdIsReadOnly = false;
    };
    StaticSidebarComponent.prototype.save = function () {
        var _this = this;
        this.jordbruksblockService.saveBlock(this.selectedBlock).subscribe(function (data) {
            _this.snackBar.open('Block Saved', 'Close', {
                duration: 2000,
            });
            _this.blockIdIsReadOnly = true;
            _this.inputsReadOnly = true;
            _this.notEditing = true;
            _this.editFeature.emit(false);
        });
    };
    StaticSidebarComponent.prototype.cancel = function () {
        this.notEditing = true;
        this.editFeature.emit(false);
        this.selectedBlock.properties = {
            BLOCKID: '',
            REGION: '',
            AGOSLAG: '',
            AREAL: 0,
            KATEGORI: '',
        };
        this.selectedBlock.geometry = {
            type: '',
            coordinates: []
        };
        this.blockIdIsReadOnly = false;
        this.inputsReadOnly = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_jordbruksblock_model__WEBPACK_IMPORTED_MODULE_2__["Jordbruksblock"])
    ], StaticSidebarComponent.prototype, "selectedBlock", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], StaticSidebarComponent.prototype, "blockidChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], StaticSidebarComponent.prototype, "editFeature", void 0);
    StaticSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-static-sidebar',
            template: __webpack_require__(/*! ./static-sidebar.component.html */ "./src/app/static-sidebar/static-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./static-sidebar.component.css */ "./src/app/static-sidebar/static-sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_jordbruksblock_service__WEBPACK_IMPORTED_MODULE_3__["JordbruksblockService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], StaticSidebarComponent);
    return StaticSidebarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Maria\Documents\Programming\tests\ol-ang\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map