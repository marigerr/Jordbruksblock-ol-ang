import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jordbruksblock } from './models/jordbruksblock.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JordbruksblockService {

  private baseURL: string;

  selectedBlock: Jordbruksblock = {
    BLOCKID: '',
    REGION: '',
    AGOSLAG: '',
    AREAL: 0,
    KATEGORI: '',
    geometry: {}
  };

  constructor(private httpClient: HttpClient) {
    this.baseURL = 'http://localhost:3000/';
  }

  getBlocks() {
    console.log('getblocks called');
    return this.httpClient.get(this.baseURL + 'features');
  }

  getBlock(blockid: string) {
    console.log('getblock called');
    return this.httpClient.get(this.baseURL + 'features?properties.BLOCKID=' + blockid);
  }

  // getBlock(blockid: string) {
  //   return this.httpClient.get(this.baseURL + 'features?properties.BLOCKID=' + blockid).subscribe((data) => {
  //     console.log(data[0].properties.BLOCKID);
  //     this.selectedBlock = {
  //       BLOCKID: data[0].properties.BLOCKID,
  //       REGION: data[0].properties.REGION,
  //       AGOSLAG: data[0].properties.AGOSLAG,
  //       AREAL: data[0].properties.AREAL,
  //       KATEGORI: data[0].properties.KATEGORI,
  //       geometry: data[0].properties.geometry
  //     };
  //   });
  // }


}
