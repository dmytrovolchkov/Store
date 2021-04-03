import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter = 0;

  increase(): any {
  this.counter++;
  console.log(this.counter);
  }

}

