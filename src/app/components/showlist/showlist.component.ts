import { Component, OnInit } from '@angular/core';
import { ListdataService } from "../../listdata.service"

@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.css'],
  providers: [ListdataService]

})
export class ShowlistComponent implements OnInit {
listName="Atul";
title="showlist";
infoReceived1: any = [];

getInfoFromService1(){
    
  this.infoReceived1 = this.dservice.getInfo1()
  
}

constructor(private dservice: ListdataService) { this.getInfoFromService1()}


  ngOnInit(): void {
  }
  
}
