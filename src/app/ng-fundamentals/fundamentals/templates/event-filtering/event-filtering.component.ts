import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-filtering',
  templateUrl: './event-filtering.component.html',
  styleUrls: ['./event-filtering.component.less']
})
export class EventFilteringComponent implements OnInit {
  syntax = '<input type="text" (keyup.enter)="onKeyUp()">';
  constructor() { }

  ngOnInit(): void {
  }
  onKeyUp() {
    console.log('ENTER was pressed');
  }

}
