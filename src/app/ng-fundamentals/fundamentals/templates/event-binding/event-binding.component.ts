import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.less']
})
export class EventBindingComponent implements OnInit {
  syntax: '<button type="button" class="btn btn-primary" (click)="onSave()">Save</button>'
  constructor() { }

  ngOnInit(): void {
  }

  onSave() {
    console.log('button was clicked');

  }

}
