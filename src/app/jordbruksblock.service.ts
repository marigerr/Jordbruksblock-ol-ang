import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jordbruksblock } from './models/jordbruksblock.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JordbruksblockService {

  private baseURL: string;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      // 'Authorization': 'my-auth-token'
    })
  };

  constructor(private httpClient: HttpClient) {
    // this.baseURL = 'http://localhost:3000/features';
    this.baseURL = 'https://rectangular-water.glitch.me/api.blocks';
  }

  getBlocks() {
    return this.httpClient.get(this.baseURL);
  }

  getBlock(blockid: string) {
    console.log(blockid);
    return this.httpClient.get(this.baseURL + '/' + blockid);
  }

  saveBlock(block: Jordbruksblock) {
    console.log(block);
    console.log('saveBlock called');
    const geoJsonBlock = {
      properties: {
        BLOCKID: block.BLOCKID,
        REGION: block.REGION,
        AGOSLAG: block.AGOSLAG,
        AREAL: block.AREAL,
        KATEGORI: block.KATEGORI
      },
      geometry: {
        type: 'MultiPolygon',
        // @ts-ignore
        coordinates: [[block.geometry.flatCoordinates]]
      }
    }
    // block.geometry = {type: 'MultiPolygon', coordinates: [[block.geometry.flatCoordinates]]};
    console.log((geoJsonBlock));

    this.httpClient.put(this.baseURL, geoJsonBlock, this.httpOptions).subscribe((data) => {
    // this.httpClient.put(this.baseURL + '/' + block.BLOCKID, block, this.httpOptions).subscribe((data) => {
      console.log('success');
      console.log(data);
    }, error => console.log(error));
  }
}
