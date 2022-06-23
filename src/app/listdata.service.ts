import { EventEmitter,Injectable } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import { BehaviorSubject, Subject } from 'rxjs';
import { Tasks } from 'src/app/interfaces/tasks';
import { Subtasks } from './interfaces/subtasks';

@Injectable({
  providedIn: 'root'
})
export class ListdataService {
  allList: Array<Tasks> = [];
  sublist:Array<Subtasks>=[];
  index:Array<number>=[];
  subTasks:Array<string>=[];
  dataEmitter = new BehaviorSubject<Array<Tasks>>(this.allList);
  indexEmitter=new BehaviorSubject<Array<number>>(this.index)
  subdataEmitter = new BehaviorSubject<Array<string>>(this.subTasks);
  constructor() { }

  addItemToList(data: Tasks) {
    this.allList.push(data);
    this.dataEmitter.next(this.allList);
  }
  workingIndex(index:number){
    this.index.push(index);
    this.indexEmitter.next(this.index);
  }
// updateItem(index:number){
//   this.allList[index].isActive=true;
//   this.dataEmitter.next(this.allList);

// }
  // addSubList(data:Subtasks){
  //   this.sublist.push(data);
  //   // this.dataEmitter.next(this.sublist);
  // }
}