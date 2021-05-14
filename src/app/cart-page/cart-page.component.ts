import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Paint, PaintState } from '../paint/paint.state';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CartPageComponent implements OnInit {

  cart: Paint[] = [];
  cost = 0;

  @Select(PaintState.getPaint) getPaint$!: Observable<Paint[]>

  constructor(public appCount: CounterService,
    private title: Title) {
      this.title.setTitle('Cart')
    }

  ngOnInit(): void {
    for (var i in this.appCount.ids) {
      this.getPaint$.subscribe(data => {
        this.cart.push(data.filter(p => p.id == this.appCount.ids[i])[0])
      })

  }
    for (var i in this.cart) {
      this.cost = this.cost + this.cart[i].price;
    }
  }

}
