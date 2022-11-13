import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'Electronics' : return 'computer';
      case 'Grocery' : return 'lunch_dining';
      case 'Sports' : return 'sports_soccer'
    }
    return 'code';
  }

}
