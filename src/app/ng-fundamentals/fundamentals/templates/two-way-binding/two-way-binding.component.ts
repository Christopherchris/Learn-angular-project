import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.less']
})
export class TwoWayBindingComponent implements OnInit {
  email='me@example.com'
  syntax = '<input type="text" [(ngModel)]="email" (keyup.enter)="onKeyUp()">';
  constructor() { }

  ngOnInit(): void {
  }
  
  onKeyUp() {
    console.log(this.email);
  }

}
