import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JordbruksblockService {

  private baseURL: string;

  constructor(private httpClient: HttpClient) {
    this.baseURL = 'http://localhost:3000/';
  }

  getBlocks() {
    return this.httpClient.get(this.baseURL + 'features');
  }

  getBlock(blockid: string) {
    return this.httpClient.get(this.baseURL + 'features?properties.BLOCKID=' + blockid);
  }
}
