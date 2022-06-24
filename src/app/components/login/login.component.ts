import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Declares Variables
  firstString: string = 'First String';
  firstBool: boolean = true;
  firstNumber: number = 29;
  firstAny: any = 'qwe';
  firstObject: object = { thatString: this.firstString, thisNumber: this.firstNumber }
  firstArray: Array<string> = ['a', 'b', 'c']
  Val = this.firstNumber;
  kalArray = ['x', 'y', 'z']
  objectWithArray: object = { isActive: this.firstAny, yourName: this.firstString }
  // id='sda'
  constructor() { }


  ngOnInit(): void {

  }

  valves(id: string) {
    console.log(id.toUpperCase());
  }
  padLeft(value: string, padding: any) {
    if (typeof padding === "number") {
      return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
      return padding + value;
    }
    throw new Error(`Expected string or number, got '${typeof padding}'.`);
  }

}
