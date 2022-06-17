import { Component, OnInit } from '@angular/core';
import { ListdataService } from "../../listdata.service"

@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.css'],
  providers: [ListdataService]

})
export class ShowlistComponent implements OnInit {
infoReceived1: string[] =[];

getInfoFromService1(){
  this.infoReceived1 = this.dservice.getInfo1();
  console.log("in showlist");
  console.log(this.infoReceived1);
 }

constructor(private dservice: ListdataService) { this.getInfoFromService1()}


  ngOnInit(): void {
  }
  
}
