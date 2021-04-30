import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs/operators';
import { CounterService } from '../services/counter.service';
import { ItemListService, Paint } from '../services/item-list.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})

export class CartPageComponent implements OnInit {

  cart: Paint[] = [];
  cost = 0;

  constructor(public appCount: CounterService,
    private items: ItemListService) { }

  ngOnInit(): void {
    for (var i in this.appCount.ids) {
    this.cart.push(this.items.getById(this.appCount.ids[i]))};

    for (var i in this.cart) {
      this.cost = this.cost + this.cart[i].price;
    }
  }

}
