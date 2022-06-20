import { Component, OnInit } from '@angular/core';
import { ListdataService } from "../../listdata.service"
import { Tasks } from 'src/app/interfaces/tasks';

@Component({
  selector: 'app-currenttask',
  templateUrl: './currenttask.component.html',
  styleUrls: ['./currenttask.component.css']
})
export class CurrenttaskComponent implements OnInit {
  
  // inputText: Tasks = {
  //   task: '',
  //   description: ''
  // }
  inputText: any;
  constructor(private listdataservice: ListdataService) {

    this.listdataservice.dataEmitter.subscribe((value) => {
      this.inputText = value;
      console.log('this is input text')
      console.log(this.inputText);
    })
    console.log('currenttask constructor');
    console.log(this.inputText.description);

  }


  ngOnInit(): void { }

}
