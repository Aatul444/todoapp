import { Component, OnInit } from '@angular/core';
import { ListdataService } from './listdata.service';
import { Observable, of, from } from 'rxjs';
import { map,filter } from 'rxjs/operators';
import { DataserviceService } from './observables/dataservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ListdataService, DataserviceService]
})
export class AppComponent implements OnInit{
  title = 'communications';

constructor(private DataserviceService : DataserviceService){}

  ngOnInit(){}




}
  // myObservable = new Observable((observer)=>{
  //   console.log('observables working');
  //   setTimeout(()=>{observer.next("1")},1000)
  //   setTimeout(()=>{observer.next("2")},1000)
  //   setTimeout(()=>{observer.next("3")},1000)
  //   setTimeout(()=>{observer.next("4")},1000)
  //   setTimeout(()=>{observer.next("5")},1000)
  // });

  // ary1=[1,2,3,4,5];
  // ary2=['a','b','c','d','e'];

  // myObservable = of(this.ary1, this.ary2);

  // myObservable = from(this.ary1);

  // newdata = this.myObservable.pipe(map((val)=>{return val*5}),
  // filter((val)=>{return val>=30}));

// filtereddata = this.myObservable.pipe(filter((val)=>{return val>=30}))

  // ngOnInit(){
    // this.newdata.subscribe((val)=>{console.log(val)},
    // (error)=>{alert(error.message);},
    // ()=>{alert('all complete')});
  // }