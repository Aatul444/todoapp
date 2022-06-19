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
datafromaddlist: string[] = [];

getInfoFromService1(){
  this.infoReceived1 = this.dservice.getInfo1()
  }

onSubmit(f: NgForm) {
  this.datafromaddlist= f.value;
  this.dservice.addInfo(this.datafromaddlist)

}

  
  
  constructor(private dservice: ListdataService) { }
  
  ngOnInit() {}
  
}
