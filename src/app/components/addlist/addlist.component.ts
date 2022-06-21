import { Component, OnInit } from '@angular/core';
import { ListdataService } from "../../listdata.service";
import { NgForm } from '@angular/forms';
import { Tasks } from 'src/app/interfaces/tasks';

@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.css'],
})
export class AddlistComponent implements OnInit {
  title = 'addlist';
 
  enteredText: Tasks = {
    task: '',
    description: ''
  }

  constructor(private listdataservice: ListdataService) { }

  ngOnInit() { }

  onSubmit(f: NgForm) {
    this.enteredText = f.value;
    this.listdataservice.addItemToList(this.enteredText)
  }
}
