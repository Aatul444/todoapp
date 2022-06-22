import { Component, OnInit } from '@angular/core';
import { ListdataService } from "../../listdata.service";
import { NgForm } from '@angular/forms';
import { Tasks } from 'src/app/interfaces/tasks';
import { Subtasks } from 'src/app/interfaces/subtasks';

@Component({
  selector: 'app-currenttask',
  templateUrl: './currenttask.component.html',
  styleUrls: ['./currenttask.component.css']
})
export class CurrenttaskComponent implements OnInit {
  inputText: Array<Tasks> = [];
  subinputText: Array<Subtasks> = [];
  subTask: Subtasks = {
    subtask: ''
  };
  subvalues:any;
   
  constructor(private listdataservice: ListdataService) { }

  ngOnInit(): void {
    this.listdataservice.dataEmitter.subscribe((value: Array<Tasks>) => {
    this.inputText = value;

})
}
  subonSubmit(f: NgForm) {
    // this.subinputText = f.value;
    this.subinputText.push(f.value)
    this.subvalues=this.subinputText.entries();
    console.log(this.subvalues)
    // this.listdataservice.addItemToList;
    f.reset();
  }
  selectGateway(num:number){
console.log(num);
  }

}