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

}
