import { Component, Input, OnInit } from '@angular/core';
import { Paint } from '../app.component';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.css'],

})
export class PaintComponent implements OnInit {
  constructor(public appCount: CounterService) { }
  bought = '';
  @Input() paint: Paint;

  ngOnInit(): void {
  }
  onBuy(): any {
    this.bought = 'Already in basket';
  }

}
