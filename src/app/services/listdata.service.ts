import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Tasks } from 'src/app/interfaces/tasks';

@Injectable({
  providedIn: 'root'
})
export class ListdataService {
  allList: Array<Tasks> = [];
  index = 0;
  subTasks: Array<string> = [];

  tasksEmitter = new BehaviorSubject<Array<Tasks>>(this.allList);
  tasksIndexEmitter = new BehaviorSubject<number>(this.index)
  subTasksEmitter = new BehaviorSubject<Array<string>>(this.subTasks);

  constructor() { }

  addTasksToList(data: Tasks) {
    this.allList.push(data);
    this.tasksEmitter.next(this.allList);
  }

  tasksIndex(index: number) {
    this.tasksIndexEmitter.next(this.index);
  }

  addItemtoSubList(val: string) {
    this.subTasks.push(val);
    this.subTasksEmitter.next(this.subTasks);
  }
}