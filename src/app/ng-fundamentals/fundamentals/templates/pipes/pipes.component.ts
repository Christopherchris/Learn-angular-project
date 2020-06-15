import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.less']
})
export class PipesComponent implements OnInit {
  course = {
    title: "The complete Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  };

  syntax = `
  <li>{{course.title | uppercase | lowercase}} </li>
  <li>{{course.students | number}}</li>
  <li>{{course.rating | number : '2.1-1'}}</li>
  <li>{{course.price | currency :'INR':true:'3.2-2'}}</li>
  <li>{{course.releaseDate | date:'shortDate'}}</li>`

  constructor() { }

  ngOnInit(): void {
  }

}
