import { Component, Input, EventEmitter, Output, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Jordbruksblock } from '../models/jordbruksblock.model';
import { JordbruksblockService } from '../jordbruksblock.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-static-sidebar',
  templateUrl: './static-sidebar.component.html',
  styleUrls: ['./static-sidebar.component.css']
})
export class StaticSidebarComponent implements OnChanges {

  constructor(private jordbruksblockService: JordbruksblockService, private snackBar: MatSnackBar) { }

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
    if (changed.currentValue.properties.BLOCKID !== '') {
      this.blockIdIsReadOnly = true;
    }
  }

  submit(blockid) {
    this.searchBlock(blockid);
  }

  searchBlock(blockid: string) {
    this.jordbruksblockService.getBlock(blockid).subscribe((data: any) => {
      console.log(data);
      this.selectedBlock.properties = {
        BLOCKID: data.properties.BLOCKID,
        REGION: data.properties.REGION,
        AGOSLAG: data.properties.AGOSLAG,
        AREAL: data.properties.AREAL,
        KATEGORI: data.properties.KATEGORI,
      };
      this.selectedBlock.geometry = data.geometry;
      this.blockidChange.emit(this.selectedBlock);
      this.blockIdIsReadOnly = true;
    });
  }

  edit() {
    this.inputsReadOnly = false;
    this.notEditing = false;
    this.editFeature.emit(true);
  }

  newSearch() {
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
  }

  save() {
    this.jordbruksblockService.saveBlock(this.selectedBlock).subscribe((data: any) => {
        this.snackBar.open('Block Saved', 'Close', {
          duration: 2000,
        });
        this.blockIdIsReadOnly = true;
        this.inputsReadOnly = true;
        this.notEditing = true;
        this.editFeature.emit(false);
    });
  }

  cancel() {
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
  }
}
