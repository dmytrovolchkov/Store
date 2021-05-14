import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { Paint } from './paint.state';

@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaintComponent implements OnInit {

  constructor(public appCount: CounterService) { }
  bought = '';
  @Input() paint: Paint;

  ngOnInit(): void {

  }
  onBuy(): any {
    this.bought = 'In basket';
    this.appCount.addToCart(this.paint.id);
  }

}
