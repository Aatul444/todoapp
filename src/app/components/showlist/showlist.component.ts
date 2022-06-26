import { Component, OnInit, Input } from '@angular/core';
import { ListdataService } from "../../services/listdata.service"
import { Tasks } from 'src/app/interfaces/tasks';
@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.css'],
})
export class ShowlistComponent implements OnInit {
  inputText: Array<Tasks> = [];
  check: Boolean = false;
  index: number=0;
  subDataToSubList: Array<string> = [];

  constructor(private listdataservice: ListdataService) { }

  ngOnInit(): void {

    this.listdataservice.tasksEmitter.subscribe((value: Array<Tasks>) => {
      this.inputText = value;
    })
    this.listdataservice.tasksIndexEmitter.subscribe((value: number) => {
      this.index = value;
    })
    this.listdataservice.subTasksEmitter.subscribe((value: Array<string>) => {
      this.subDataToSubList = value
    })
  }

  tasksLists(num: number) {
    console.log(num);
    this.listdataservice.tasksIndex(num);
    this.subDataToSubList = this.inputText[num].subTasks;
  }
}