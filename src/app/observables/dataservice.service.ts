import { Injectable, EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  dataEmitter = new EventEmitter<string>();

  raiseDataEmitterEvent(data: string) {
    this.dataEmitter.next(data);
  }
  constructor() { }
}
