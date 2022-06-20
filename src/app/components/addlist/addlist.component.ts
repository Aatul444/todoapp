import { Component, OnInit } from '@angular/core';
import { ListdataService } from "../../listdata.service";
import { NgForm } from '@angular/forms';
import { Tasks } from 'src/app/interfaces/tasks';

@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.css'],
  providers: [ListdataService]
})
export class AddlistComponent implements OnInit {
  title = 'addlist';
 
  enteredText: Tasks = {
    task: '',
    description: ''
  }

  constructor(private listdataservice: ListdataService) { }

  onSubmit(f: NgForm) {

    this.enteredText = f.value;
    console.log(this.enteredText)
    // this.listdataservice.raiseDataEmitterEvent(this.enteredText)
 
  }
  ngOnInit() { }

}












// infoReceived1: string[] = [];
// datafromaddlist: string[] = [];
// constructor(private dservice: ListdataService) { }

// onSubmit(f: NgForm) {
//   this.datafromaddlist= f.value;
//   this.dservice.addInfo(this.datafromaddlist)

// }
// getInfoFromService1(){
//   this.infoReceived1 = this.dservice.getInfo1()
//   }
