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

// updateInfo(frm: any){

//   this.dservice.addInfo(frm.value.location)

// }

  getInfoFromService1(){
    
    this.infoReceived1 = this.dservice.getInfo1()
    
  }
  
  
  constructor(private dservice: ListdataService) { }
  
  ngOnInit(): void {
  }
  
}
