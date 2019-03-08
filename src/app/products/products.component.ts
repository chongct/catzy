import { Component, OnInit } from '@angular/core';

import { faCat } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  product: string = "Rings";
  faCat = faCat;

  constructor() { }

  ngOnInit() {
  }

  onSelect(link: string): void {
    this.product = link;
  }
}
