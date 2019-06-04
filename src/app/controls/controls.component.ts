import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BaseMapControl } from '../map/map.defaults';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  constructor() { }

  @Input()
  currentBaseMap: BaseMapControl;
  @Input()
  baseMapControls: BaseMapControl[];
  @Input()
  blockOpacity: number;

  @Output()
  updateBasemapOpacity: EventEmitter<BaseMapControl> = new EventEmitter();
  @Output()
  updateBlockOpacity: EventEmitter<number> = new EventEmitter();
  @Output()
  changeBaseMap: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    console.log(this.blockOpacity);
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
