import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../dataservice.service';
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private dataService:DataserviceService) { }

  ngOnInit(): void {
  }
 enteredText: any;
 onBtnClick(){
  // console.log(this.enteredText);
  this.dataService.raiseDataEmitterEvent(this.enteredText)
 }
}
