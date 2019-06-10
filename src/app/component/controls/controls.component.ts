import { Component, Output, EventEmitter, Input, HostListener } from '@angular/core';
import { BaseMapControl } from '../map/map.defaults';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent {

  @Input()
  currentBaseMap: BaseMapControl;
  @Input()
  baseMapControls: BaseMapControl[];
  @Input()
  blockOpacity: number;
  @Input()
  fieldTypes: any;;

  @Output()
  updateBasemapOpacity: EventEmitter<BaseMapControl> = new EventEmitter();
  @Output()
  updateBlockOpacity: EventEmitter<number> = new EventEmitter();
  @Output()
  changeBaseMap: EventEmitter<string> = new EventEmitter();

  screenHeight: any;
  screenWidth: any;
  legendContent: string;

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

  constructor() {
    this.onResize();
  }

  baseMapOpacityChange() {
    this.updateBasemapOpacity.emit(this.currentBaseMap);
  }

  blockOpChange() {
    this.updateBlockOpacity.emit(this.blockOpacity);
  }

  selChange() {
    this.changeBaseMap.emit(this.currentBaseMap.value);
  }
}
