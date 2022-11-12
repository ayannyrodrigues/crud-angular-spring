import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../model/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products$: Observable<Product[]>;

  displayedColumns = ['name', 'category', 'price'];

  constructor(private productService: ProductsService) {
    this.products$ = this.productService.list();
  }

  ngOnInit(): void { }

}
