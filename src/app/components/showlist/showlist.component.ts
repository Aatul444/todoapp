import { Component, OnInit, Input } from '@angular/core';
import { ListdataService } from "../../listdata.service"
import { Tasks } from 'src/app/interfaces/tasks';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.css'],
})
export class ShowlistComponent implements OnInit {
  inputText: Array<Tasks> = [];
  constructor(private listdataservice: ListdataService) { }
  
  ngOnInit(): void {
    this.listdataservice.dataEmitter.subscribe((value: Array<Tasks>) => {
      this.inputText = value;
    })
    this.listdataservice.dataEmitter.subscribe((value: Array<Tasks>) => {
      this.inputText = value;
      console.log(this.inputText);
    })
  }
  test = true;
  openSubTasks(){
  this.test = !this.test;
  console.log('color changed')
  }
  selectGateway(num:number){
    console.log(num);
        this.listdataservice.updateItem(1);

      }

}