import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.less']
})
export class StyleBindingComponent implements OnInit {
  isActive = true;
  syntax = `<button type="button" class="btn" [style.backgroundColor]="isActive?'gray':'white'">Save</button>`;
  constructor() { }

  ngOnInit(): void {
  }

}
