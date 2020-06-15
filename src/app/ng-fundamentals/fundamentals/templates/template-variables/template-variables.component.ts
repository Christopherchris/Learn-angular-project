import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-variables',
  templateUrl: './template-variables.component.html',
  styleUrls: ['./template-variables.component.less']
})
export class TemplateVariablesComponent implements OnInit {

  syntax = '<input #email type="text" (keyup.enter)="onKeyUp(email.value)">';
  constructor() { }

  ngOnInit(): void {
  }
  onKeyUp(email) {
    console.log(email);
  }

}
