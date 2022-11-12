import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap, timeout } from 'rxjs';

import { Product } from './../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly API = '/assets/products.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Product[]>(this.API)
      .pipe(
        first(),
        delay(3000),
        tap(products => console.log(products))
      );
  }
}
