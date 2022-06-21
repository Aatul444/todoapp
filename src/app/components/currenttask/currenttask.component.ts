import { Component, OnInit } from '@angular/core';
import { ListdataService } from "../../listdata.service"
import { Tasks } from 'src/app/interfaces/tasks';

@Component({
  selector: 'app-currenttask',
  templateUrl: './currenttask.component.html',
  styleUrls: ['./currenttask.component.css']
})
export class CurrenttaskComponent implements OnInit {

  inputText: Array<Tasks> = [];

  constructor(private listdataservice: ListdataService) { }

  ngOnInit(): void {
    this.listdataservice.dataEmitter.subscribe((value: Array<Tasks>) => {
      this.inputText = value;
      console.log(this.inputText)
    })

  }
  // onSubmit(f: NgForm) {
  //   this.editedText = f.value;
  //   this.listdataservice.popItemFromList(this.editedText)
  // }

  // editdata(){
  //   let index = this.myObjArray.indexOf(item);

  //   item.name = "Change Hardik";

  //   this.myObjArray[index] = item;



  //   console.log(this.myObjArray);

  // }
}
