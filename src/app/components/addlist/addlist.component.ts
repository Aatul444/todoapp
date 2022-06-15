import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.css']
})
export class AddlistComponent implements OnInit {
title='addlist';
  constructor() { }
  newworklist(){
    alert('Thanks to add list'+ this.title + 'nana')
  }
  // messagefromA=this.newworklist;
  ngOnInit(): void {
  }

}
