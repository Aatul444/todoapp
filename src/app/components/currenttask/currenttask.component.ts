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
  num: Array<number> = [];
  sublist: Array<string> = [];
  dataToSubList: string = '';
  constructor(private listdataservice: ListdataService) { }

  ngOnInit(): void {
    this.listdataservice.dataEmitter.subscribe((value: Array<Tasks>) => {
      this.inputText = value;
    })
    this.listdataservice.indexEmitter.subscribe((value: Array<number>) => {
      this.num = value;
      // this.inputText[this.num[this.num.length - 1]].subTasks.push(this.dataToSubList);

    })
    this.listdataservice.subdataEmitter.subscribe((value: Array<string>) => {
      this.sublist = value
    })
  }
  selectGateway(num: number) {
    console.log(num);
    console.log(this.inputText)
  }

  subListDataSubmit() {
    this.sublist.push(this.dataToSubList);
    console.log('subtasks values from currenttasks'+this.dataToSubList[this.num.length])
    // this.inputText[this.num[this.num.length]].subTasks.push(this.dataToSubList[this.num.length])
    this.inputText[this.num[this.num.length - 1]].subTasks.push(this.dataToSubList);

  }
}















/**
 * 
 console.log(this.num.length)
 console.log('clicked task is this' + this.inputText[this.num.length - 1].subTasks)
 console.log('this is input text' + this.inputText)
 console.log('this is last element of input text' + this.inputText[this.num[this.num.length]])
 */