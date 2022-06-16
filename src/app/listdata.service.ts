import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListdataService {
  info1: string[]=["John Mathew",'E354','jm@abc.net']

  // info2:  any = {listname:"John", description:"Doe", age:50, eyeColor:"blue"};
  
 

  constructor() { }
  getInfo1():string[]{

    return this.info1

  }

 
  // addInfo(data){

  //   this.info1.push(data)

  //   return this.info1

  // }
  
}
