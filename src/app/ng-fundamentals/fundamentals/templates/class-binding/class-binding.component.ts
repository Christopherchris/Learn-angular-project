import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.less']
})
export class ClassBindingComponent implements OnInit {
  isActive=true;
  syntax='<button type="button" class="btn btn-primary" [class.active]="isActive">Save</button>';
  constructor() { }

  ngOnInit(): void {
  }

}
