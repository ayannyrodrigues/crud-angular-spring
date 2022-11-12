import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {
      id: 1,
      name: 'Smartphone',
      category: 'eletronico',
      price: 1800
    }
  ];
  displayedColumns = ['name', 'category', 'price'];

  constructor() { }

  ngOnInit(): void {
  }

}
