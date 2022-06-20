import { Component, OnInit, Input } from '@angular/core';
import { ListdataService } from "../../listdata.service"

@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.css'],
  providers: [ListdataService]

})
export class ShowlistComponent implements OnInit {


constructor(private listdataservice:ListdataService) {}


  ngOnInit(): void {
    this.listdataservice.dataEmitter.subscribe((value)=>{
      // this.inputText=value;
    })
  }
  
}


// infoReceived1: string[] = [];

// // @Input() datatochild : any;

// getInfoFromService1(){
//   this.infoReceived1 = this.dservice.getInfo1();
//   console.log(this.infoReceived1);

//   this.infoReceived1.push(this.datatochild);
//   console.log(this.infoReceived1);
//  }constructor(private dservice: ListdataService) { this.getInfoFromService1()}