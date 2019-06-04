import { Component, Input, EventEmitter, Output, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Jordbruksblock, makeEmptyBlock } from '../../models/jordbruksblock.model';
import { JordbruksblockService } from '../../jordbruksblock.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-static-sidebar',
  templateUrl: './static-sidebar.component.html',
  styleUrls: ['./static-sidebar.component.css']
})
export class StaticSidebarComponent implements OnChanges {

  constructor(private jordbruksblockService: JordbruksblockService, private snackBar: MatSnackBar) { }

  @Input()
  selectedBlock: Jordbruksblock;
  @Output()
  blockidChange: EventEmitter<Jordbruksblock> = new EventEmitter();
  @Output()
  editFeature: EventEmitter<boolean> = new EventEmitter();
  @Output()
  reloadData: EventEmitter<boolean> = new EventEmitter();

  blockIdIsReadOnly = false;
  inputsReadOnly = true;
  notEditing = true;

  ngOnChanges(changes: SimpleChanges) {
    const changed: SimpleChange = changes.selectedBlock;
    if (changed.currentValue && changed.currentValue.properties.BLOCKID !== '') {
      this.blockIdIsReadOnly = true;
    }
  }

  search(blockid) {
    this.searchBlock(blockid);
  }

  searchBlock(blockid: string) {
    this.jordbruksblockService.getBlock(blockid).subscribe((data: any) => {
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
    this.selectedBlock = makeEmptyBlock();
    this.editFeature.emit(false);
    this.blockIdIsReadOnly = false;
  }

  save() {
    this.jordbruksblockService.saveBlock(this.selectedBlock).subscribe((data: any) => {
      this.snackBar.open('Block Sparade', 'Stäng', {
        duration: 3000,
      });
      this.blockIdIsReadOnly = true;
      this.inputsReadOnly = true;
      this.notEditing = true;
      this.reloadData.emit(true);
    });
  }

  cancel() {
    this.notEditing = true;
    this.editFeature.emit(false);
    this.selectedBlock = makeEmptyBlock();
    this.blockIdIsReadOnly = false;
    this.inputsReadOnly = true;
  }
}
