import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.css']
})
export class ShowlistComponent implements OnInit {
listName="Atul";
title="showlist";
  constructor() { }
  newworklist(){
    alert('Thanku to add list'+ this.title + 'nana')
  }
  ngOnInit(): void {
  }

}
