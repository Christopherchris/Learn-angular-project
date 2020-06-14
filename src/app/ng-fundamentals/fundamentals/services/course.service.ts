import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor() { }

  getCourses() {
    return ['react js', 'angular', 'vue js', '.net'];
  }
}
