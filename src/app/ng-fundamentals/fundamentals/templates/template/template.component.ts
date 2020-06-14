import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.less']
})
export class TemplateComponent implements OnInit {
  interpolatinSyntax:string='{{...}}'
  constructor() { }

  ngOnInit(): void {
  }

}
