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
    this.baseURL = 'http://localhost:3000/features';
  }

  getBlocks() {
    return this.httpClient.get(this.baseURL);
  }

  getBlock(blockid: string) {
    return this.httpClient.get(this.baseURL + '?properties.BLOCKID=' + blockid);
  }

  saveBlock(block: Jordbruksblock) {
    console.log('saveBlock called');
    // @ts-ignore
    block.geometry = {type: 'MultiPolygon', coordinates: [block.geometry.flatCoordinates]};
    console.log((block));

    this.httpClient.put(this.baseURL + '/' + block.BLOCKID, block, this.httpOptions).subscribe((data) => {
      console.log('success');
      console.log(data);
    }, error => console.log(error));
  }
}
