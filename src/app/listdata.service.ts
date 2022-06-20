import { EventEmitter,Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListdataService {
  info1: object[] = [
    {
      "task": "Douglas  Pace",
      "description": "111lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
    },
    {
      "name": "Mcleod  Mueller",
      "description": "222lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
    },
    {
    "name": "Day  Meyers",
    "description": "333lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
  },
  {
    "name": "Aguirre  Ellis",
    "description": "444lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
  },
  {
    "name": "Cook  Tyson",
    "description": "555lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
  }
]

  dataEmitter=new Subject<string[]>();

  raiseDataEmitterEvent(data:string[]){
    this.info1.push(data);
    console.log(this.info1)
    this.dataEmitter.next(data);
  }

 
  constructor() {console.log("inside service")}

}










    // {
    //   "name": "Douglas  Pace",
    //   "description": "111lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
    // },
    // {
    //   "name": "Mcleod  Mueller",
    //   "description": "222lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "

    // },
    // {
    //   "name": "Day  Meyers",
    //   "description": "333lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "

    // },
    // {
    //   "name": "Aguirre  Ellis",
    //   "description": "444lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "

    // },
    // {
    //   "name": "Cook  Tyson",
    //   "description": "555lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "

    // }
  // ];
    
// }getInfo1():string[]{return this.info1}


  // addInfo(data:any)
  // {
  //   console.log("data before push");
  //   console.log(this.info1);
  //   this.info1.push(data);
  //   console.log("data after push");
  //   console.log(this.info1);
  //     }
  
  // dataEmitter = new EventEmitter<string>();
  // raiseDataEmitter(data:string){
  //   this.dataEmitter.emit(data);
  // }