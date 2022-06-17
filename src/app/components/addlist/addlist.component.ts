import { Component, OnInit } from '@angular/core';
import { ListdataService } from "../../listdata.service";
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.css'],
  providers: [ListdataService]
})
export class AddlistComponent implements OnInit {
title = 'addlist';
infoReceived1: string[] = [];
datafromaddlist: string[]=[];

onSubmit(f: NgForm) {
  console.log('in addlist #task value of input section');
  console.log(f.value.task); 
  this.datafromaddlist= f.value;
  console.log(this.datafromaddlist);
  this.dservice.addInfo(this.datafromaddlist)
}

  getInfoFromService1(){
    
    this.infoReceived1 = this.dservice.getInfo1()
    
  }
  
  constructor(private dservice: ListdataService) { }
  
  ngOnInit() {}
  
}
