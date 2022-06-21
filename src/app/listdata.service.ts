import { EventEmitter,Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Tasks } from 'src/app/interfaces/tasks';

@Injectable({
  providedIn: 'root'
})
export class ListdataService {
  allList: Array<Tasks> = [];
  dataEmitter = new Subject<Array<Tasks>>();

  constructor() { }

  addItemToList(data: Tasks) {
    this.allList.push(data);
    this.dataEmitter.next(this.allList);
  }
}