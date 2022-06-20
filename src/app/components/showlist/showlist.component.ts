import { Component, OnInit, Input } from '@angular/core';
import { ListdataService } from "../../listdata.service"
import { Tasks } from 'src/app/interfaces/tasks';
@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.css'],
  providers: [ListdataService]

})
export class ShowlistComponent implements OnInit {

  inputText: Array<string> = ['fsdfsf', 'fes', 'fesf'];



  ngOnInit(): void { }
  constructor(private listdataservice: ListdataService) {
    this.listdataservice.dataEmitter.subscribe((value) => {
      this.inputText = value;
      console.log('this is input text')
      console.log(this.inputText);
    })
    console.log('showlist constructor')
  }
}