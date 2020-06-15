import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.less']
})
export class CustomPipesComponent implements OnInit {
  text = "Enables the detection, download and installation of updates for Windows and other programs. If this service is disabled, users of this computer will not be able to use Windows Update or its automatic updating feature, and programs will not be able to use the Windows Update Agent (WUA) API."
  syntax="<p>{{text | summary:10}}</p>"
  constructor() { }

  ngOnInit(): void {
  }

}
