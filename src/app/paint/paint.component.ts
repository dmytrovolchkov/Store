import { Component, Input, OnInit } from '@angular/core';
import { Paint} from '../services/item-list.service';
import { CounterService } from '../services/counter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.css',
              '../../bootstrap.css'],

})
export class PaintComponent implements OnInit {
  constructor(public appCount: CounterService, private router: Router) { }
  bought = '';
  @Input() paint: Paint;

  ngOnInit(): void {
  }
  onBuy(): any {
    this.bought = 'In basket';
  }
  goToItemPage () {
this.router.navigate(['/form'])
  }

}
