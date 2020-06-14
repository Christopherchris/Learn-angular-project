import { Component } from '@angular/core';

import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ng-learn';

  toggleMenu() {
    $("#wrapper").toggleClass("toggled");
  }
}
