import { Component, OnInit } from '@angular/core';
import { ListdataService } from "../../listdata.service";
import { Tasks } from 'src/app/interfaces/tasks';

@Component({
  selector: 'app-currenttask',
  templateUrl: './currenttask.component.html',
  styleUrls: ['./currenttask.component.css']
})
export class CurrenttaskComponent implements OnInit {
  inputText: Array<Tasks> = [];
  dataToSubList: Array<string> = [];
  num: Array<number> = [];
  constructor(private listdataservice: ListdataService) { }

  ngOnInit(): void {
    this.listdataservice.dataEmitter.subscribe((value: Array<Tasks>) => {
      this.inputText = value;
    })
    this.listdataservice.indexEmitter.subscribe((value: Array<number>) => {
      this.num = value;
    })
    this.listdataservice.subdataEmitter.subscribe((value: Array<string>) => {
      this.dataToSubList = value
    })
  }
  selectGateway(num: number) {
    console.log(num);
    console.log(this.inputText)
  }

  subListDataSubmit() {
    console.log(this.num.length)
    console.log('clicked one task is this' + this.inputText[this.num.length - 1].subTasks)
    this.inputText[this.num[this.num.length]].subTasks.push(this.dataToSubList[this.num.length])
    console.log(this.inputText)
    console.log(this.inputText[this.num[this.num.length]])
  }
}