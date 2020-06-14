import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.less']
})
export class ServicesComponent implements OnInit {
  courses: any = []
  injectService: string;
  alternativeWay: string;
  constructor(private courseService: CourseService) {
    this.injectService = `
    providers:[CoursesService]
        
    constructor(service:CourseService){
          service.getCourses();
    }`
    this.alternativeWay = `
    import { Injectable } from '@angular/core';

    @Injectable({
      providedIn: 'root'
    })

    constructor(service:CourseService){
      service.getCourses();
    }`
  }
  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }

}
