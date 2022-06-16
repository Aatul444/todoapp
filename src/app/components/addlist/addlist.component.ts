import { Component, OnInit } from '@angular/core';
import { ListdataService } from "../../listdata.service"
@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.css'],
  providers: [ListdataService]
})
export class AddlistComponent implements OnInit {
title = 'addlist';
infoReceived1: string[] = [];
name = '';

updateInfo(frm:any){

  this.dservice.addInfo(this.name)

}

  getInfoFromService1(){
    
    this.infoReceived1 = this.dservice.addInfo(this.name)
    
  }
  
  constructor(private dservice: ListdataService) { }
  
  ngOnInit() {}
  
}
