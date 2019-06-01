import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Jordbruksblock } from '../models/jordbruksblock.model';
import { JordbruksblockService } from '../jordbruksblock.service';
// import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-static-sidebar',
  templateUrl: './static-sidebar.component.html',
  styleUrls: ['./static-sidebar.component.css']
})
export class StaticSidebarComponent {
  // 64414159295

  constructor(private jordbruksblockService: JordbruksblockService) { }

  @Input()
  selectedBlock: Jordbruksblock;

  @Output()
  blockidChange: EventEmitter<Jordbruksblock> = new EventEmitter();

  searchBlock(blockid: string) {
    this.jordbruksblockService.getBlock(blockid).subscribe((data) => {
      this.selectedBlock = {
        BLOCKID: data[0].properties.BLOCKID,
        REGION: data[0].properties.REGION,
        AGOSLAG: data[0].properties.AGOSLAG,
        AREAL: data[0].properties.AREAL,
        KATEGORI: data[0].properties.KATEGORI,
        geometry: data[0].properties.geometry
      };
      this.blockidChange.emit(this.selectedBlock);
    });
  }
}
