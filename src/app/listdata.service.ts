import { EventEmitter,Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Tasks } from 'src/app/interfaces/tasks';
import { Subtasks } from './interfaces/subtasks';

@Injectable({
  providedIn: 'root'
})
export class ListdataService {
  allList: Array<Tasks> = [];
  sublist:Array<Subtasks>=[];
  dataEmitter = new Subject<Array<Tasks>>();
  subdataEmitter = new Subject<Array<Tasks>>();
  constructor() { }

  addItemToList(data: Tasks) {
    this.allList.push(data);
    this.dataEmitter.next(this.allList);
  }
updateItem(index:number){
  this.allList[index].isActive=true;
  this.dataEmitter.next(this.allList);

}
  addSubList(data:Subtasks){
    this.sublist.push(data);
    // this.dataEmitter.next(this.sublist);
  }
}