import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Paint, PaintState } from '../paint/paint.state';
import { CounterService } from '../services/counter.service';
import { CartState } from './cart.state';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CartPageComponent implements OnInit {

  cart: Paint[] = []
  ids: number[]
  cost = 0

  @Select(PaintState.getPaint) getPaint$!: Observable<Paint[]>
  @Select(CartState.getCart) getCart$!: Observable<number[]>

  constructor(public appCount: CounterService,
    private title: Title,
    public store: Store) {
      this.title.setTitle('Cart')
    }

  ngOnInit(): void {

    this.getCart$.subscribe(data => {
      this.ids = data
    })
    for (var i in this.ids) {
      this.getPaint$.subscribe(data => {
        this.cart.push(data.filter(p => p.id == this.ids[i])[0])
      })
  }
    for (var i in this.cart) {
      this.cost = this.cost + this.cart[i].price;
    }
  }
}
