import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.less']
})
export class DirectivesComponent implements OnInit {
  courses: any = []
  ngForSyntax: string = "";
  constructor() { }

  ngOnInit(): void {
    this.courses = ['react js', 'angular', 'vue js', '.net']

    this.ngForSyntax = `
    <ul>
      <li *ngFor="let course of courses">{{course}}</li>
    </ul>`
  }

}
