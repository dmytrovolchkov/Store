import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter = 0;
  ids = [];

  increase(): any {
  this.counter++;
  console.log('Counter: ', this.counter);
  }

  addToCart(p): any {
    if (!this.ids.includes(p)) {
    this.ids.push(p);}
    console.log('Cart: ', this.ids)
  }

}

