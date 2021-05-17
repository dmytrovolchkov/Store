// import { addToCart } from './../cart-page/cart.action';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { CounterService } from '../services/counter.service';
import { Paint } from './paint.state';

@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PaintComponent implements OnInit {

  constructor(public appCount: CounterService,
    public store: Store) {}
  @Input() paint: Paint;
  bought = '';

  ngOnInit(): void {

  }
  onBuy(): any {
    this.bought = 'In basket'
    // this.store.dispatch(new addToCart(this.paint?.id))
  }

}
