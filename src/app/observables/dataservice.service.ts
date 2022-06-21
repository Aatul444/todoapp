import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
// import { EventEmitter } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  dataEmitter = new EventEmitter<string>();

  raiseDataEmitterEvent(data:string){
    this.dataEmitter.next(data);
  }
  constructor() { }
}
