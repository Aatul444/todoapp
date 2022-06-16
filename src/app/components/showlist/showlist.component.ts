import { Component, OnInit } from '@angular/core';
import { ListdataService } from "../../listdata.service"

@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.css'],
  providers: [ListdataService]

})
export class ShowlistComponent implements OnInit {
// listName="Atul";
// title="showlist";
infoReceived1: any;
infoReceived2: any;

people:any;
getInfoFromService1(){
    console.log("hii")
  // this.infoReceived1 = this.dservice.addInfo()
  // this.infoReceived2 = this.dservice.getInfo2()
 }

constructor(private dservice: ListdataService) { this.getInfoFromService1()}


  ngOnInit(): void {
  }
  
}
