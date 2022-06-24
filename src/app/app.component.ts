import { Component, OnInit } from '@angular/core';
import { DataserviceService } from './observables/dataservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'communications';

  constructor(private DataserviceService: DataserviceService) { }

  ngOnInit() { }

}