import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.less']
})
export class PropertyBindingComponent implements OnInit {
  title = 'Property Binding';
  imageUrl = './assets/images/img.png';
  syntaxOne = '<h5>{{title}}</h5>';
  alternativeSyntaxOne = '<h5 [textContent]="title"></h5>';
  syntaxTwo = '<img src="{{imageUrl}}" alt="...">';
  alternativeSyntaxTwo = '<img [src]="imageUrl" alt="...">';

  constructor() { }

  ngOnInit(): void {
  }

}
