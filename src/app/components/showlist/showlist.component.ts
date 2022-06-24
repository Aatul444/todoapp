import { Component, OnInit, Input } from '@angular/core';
import { ListdataService } from "../../services/listdata.service"
import { Tasks } from 'src/app/interfaces/tasks';
// import { NgClass } from '@angular/common';
@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.css'],
})
export class ShowlistComponent implements OnInit {
  inputText: Array<Tasks> = [];
  check: Boolean = false;
  index: Array<number> = [];
  subDataToSubList: Array<string> = [];

  constructor(private listdataservice: ListdataService) { }

  ngOnInit(): void {

    this.listdataservice.dataEmitter.subscribe((value: Array<Tasks>) => {
      this.inputText = value;
    })
    this.listdataservice.indexEmitter.subscribe((value: Array<number>) => {
      this.index = value;
    })
    this.listdataservice.subdataEmitter.subscribe((value: Array<string>) => {
      this.subDataToSubList = value
    })
  }

  selectGateway(num: number) {
    console.log(num);
    this.listdataservice.workingIndex(num);
    if (this.check == false) { this.check = true; console.log('yes it is clicked') }
    else if (this.check == true) { this.check = false; }
    if (this.check == true) {
      console.log('inside if' + this.inputText[num].subTasks);
    }
    this.subDataToSubList = this.inputText[num].subTasks;
  }
}