import { Component, OnInit } from '@angular/core';
import { ListdataService } from "../../services/listdata.service";
import { Tasks } from 'src/app/interfaces/tasks';

@Component({
  selector: 'app-currenttask',
  templateUrl: './currenttask.component.html',
  styleUrls: ['./currenttask.component.css']
})
export class CurrenttaskComponent implements OnInit {
  inputText: Array<Tasks> = [];
  taskIndex: number = 0;
  subTasksList: Array<string> = [];
  subTask: string = '';

  constructor(private listdataservice: ListdataService) { }

  ngOnInit(): void {
    this.listdataservice.tasksEmitter.subscribe((value: Array<Tasks>) => {
      this.inputText = value
    })
    this.listdataservice.tasksIndexEmitter.subscribe((value: number) => {
      this.taskIndex = value
    })
    this.listdataservice.subTasksEmitter.subscribe((value: Array<string>) => {
      this.subTasksList = value
    })
  }
  selectGateway(num: number) { }

  subListDataSubmit() {
    this.subTasksList.push(this.subTask)
    this.inputText[this.taskIndex].subTasks.push()
  }
}















/**
 * 
 console.log(this.num.length)
 console.log('clicked task is this' + this.inputText[this.num.length - 1].subTasks)
 console.log('this is input text' + this.inputText)
 console.log('this is last element of input text' + this.inputText[this.num[this.num.length]])
 */