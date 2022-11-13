import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

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

  constructor(
    private productService: ProductsService,
    public dialog: MatDialog
  ) {
    this.products$ = this.productService.list()
    .pipe(
       catchError(error => {
          this.onError("An error occurred, please try again later")
          return of([])
        })
    );
  }

  ngOnInit(): void { }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

}
