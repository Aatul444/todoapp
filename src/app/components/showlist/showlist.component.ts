import { Component, OnInit, Input } from '@angular/core';
import { ListdataService } from "../../listdata.service"
import { Tasks } from 'src/app/interfaces/tasks';
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
  }
  // passclass(eve:any){
  //   eve.target?.className
  // }
  // shareindex(index) {

  // }
}