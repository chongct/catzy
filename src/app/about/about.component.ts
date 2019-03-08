import { Component, OnInit } from '@angular/core';

import { faCat } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  faCat = faCat;

  constructor() { }

  ngOnInit() {
  }

}
