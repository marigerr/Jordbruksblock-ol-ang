import { Component, Input, EventEmitter, Output, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Jordbruksblock } from '../models/jordbruksblock.model';
import { JordbruksblockService } from '../jordbruksblock.service';

@Component({
  selector: 'app-static-sidebar',
  templateUrl: './static-sidebar.component.html',
  styleUrls: ['./static-sidebar.component.css']
})
export class StaticSidebarComponent implements OnChanges {
  // 64414159295

  constructor(private jordbruksblockService: JordbruksblockService) { }

  blockIdIsReadOnly = false;
  inputsReadOnly = true;
  notEditing = true;

  @Input()
  selectedBlock: Jordbruksblock;

  @Output()
  blockidChange: EventEmitter<Jordbruksblock> = new EventEmitter();
  @Output()
  editFeature: EventEmitter<boolean> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
    const changed: SimpleChange = changes.selectedBlock;
    if (changed.currentValue.BLOCKID !== '') {
      this.blockIdIsReadOnly = true;
    }
  }

  submit(blockid) {
    this.searchBlock(blockid)
  }

  searchBlock(blockid: string) {
    this.jordbruksblockService.getBlock(blockid).subscribe((data) => {
      console.log(data[0]);
      this.selectedBlock = {
        BLOCKID: data[0].properties.BLOCKID,
        REGION: data[0].properties.REGION,
        AGOSLAG: data[0].properties.AGOSLAG,
        AREAL: data[0].properties.AREAL,
        KATEGORI: data[0].properties.KATEGORI,
        geometry: data[0].properties.geometry
      };
      // this.selectedBlock.geometry = data[0].properties.geometry
      this.blockidChange.emit(this.selectedBlock);
      this.blockIdIsReadOnly = true;
    });
  }

  edit() {
    this.inputsReadOnly = false;
    this.notEditing = false;
    this.editFeature.emit(true);
    console.log('edit button clicked');
    console.log(this.selectedBlock);
  }

  newSearch() {
    this.selectedBlock = {
      BLOCKID: '',
      REGION: '',
      AGOSLAG: '',
      AREAL: 0,
      KATEGORI: '',
      geometry: {}
    };
    this.editFeature.emit(false);
    this.blockIdIsReadOnly = false;
  }

  // newSearch() {
  //   this.selectedBlock = {
  //     properties: {
  //       BLOCKID: '',
  //       REGION: '',
  //       AGOSLAG: '',
  //       AREAL: 0,
  //       KATEGORI: '',
  //     },
  //     geometry: {
  //       type: '',
  //       coordinates: []
  //     }
  //   }
  // }

  save() {
    this.jordbruksblockService.saveBlock(this.selectedBlock);
  }

  cancel() {
    this.notEditing = true;
    this.editFeature.emit(false);
    this.selectedBlock = {
      BLOCKID: '',
      REGION: '',
      AGOSLAG: '',
      AREAL: 0,
      KATEGORI: '',
      geometry: {}
    };
  }
}
