import { Component, Input } from '@angular/core';
import { Jordbruksblock } from '../models/jordbruksblock.model';
import { JordbruksblockService } from '../jordbruksblock.service';
// import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-static-sidebar',
  templateUrl: './static-sidebar.component.html',
  styleUrls: ['./static-sidebar.component.css']
})
export class StaticSidebarComponent {

  constructor(private jordbruksblockService: JordbruksblockService) { }

  // jordbruksblock: Jordbruksblock;
  // blockid = '';
  // @Input() mapcomp: MapComponent;
  counter = 0;

  get jordbruksblock(): Jordbruksblock {
    this.counter = this.counter + 1;
    console.log('Get called ' + this.counter);
    return this.jordbruksblockService.selectedBlock;
  }
  set jordbruksblock(block) {
    this.jordbruksblockService.selectedBlock = block;
  }

// 64414166278

  searchBlock(blockid: string) {
    console.log('search called');
    this.jordbruksblockService.getBlock(blockid).subscribe((data) => {
      console.log(data);
  //     this.selectedBlock = {
  //       BLOCKID: data[0].properties.BLOCKID,
  //       REGION: data[0].properties.REGION,
  //       AGOSLAG: data[0].properties.AGOSLAG,
  //       AREAL: data[0].properties.AREAL,
  //       KATEGORI: data[0].properties.KATEGORI,
  //       geometry: data[0].properties.geometry
  //     };
    });
  }

}
