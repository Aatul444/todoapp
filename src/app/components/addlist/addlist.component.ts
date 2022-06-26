import { Component, OnInit } from '@angular/core';
import { ListdataService } from "../../services/listdata.service";
import { NgForm } from '@angular/forms';
import { Tasks } from 'src/app/interfaces/tasks';

@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.css'],
})
export class AddlistComponent implements OnInit {
  title = 'addlist';

  addListTasks: Tasks = {
    task: '',
    subTasks: [],
    isActive: false
  }

  constructor(private listdataservice: ListdataService) { }

  ngOnInit() { }

  addListPageForm(f: NgForm) {
    this.addListTasks = f.value;
    console.log(this.addListTasks)
    this.listdataservice.addTasksToList(this.addListTasks)
    f.reset();
  }
}
