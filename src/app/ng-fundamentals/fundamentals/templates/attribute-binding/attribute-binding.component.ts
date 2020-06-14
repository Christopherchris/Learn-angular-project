import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrls: ['./attribute-binding.component.less']
})
export class AttributeBindingComponent implements OnInit {
  colSpan = 2; 
  syntax = '<td [attr.colspan]="colSpan"></td>';
  constructor() { }

  ngOnInit(): void {
  }

}
