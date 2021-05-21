import {ChangeDetectionStrategy, Component, Input, OnInit, Output} from '@angular/core';
import {CounterService} from '../services/counter.service';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { getCategory } from './../category-page/category.action';
import { CategoryState } from './../category-page/category.state';
import { Observable } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css',],
  animations: [
    trigger('cart', [
      state('start', style({background: '#6A983C'})),
      state('end', style({background: '#6A983C'})),
      transition('* <=> end', [
        style({background: 'green', transform: 'scale(1.2)'}),
        animate('0.05s', style({background: '6A983C'})),
        animate(50)
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeaderComponent implements OnInit {

  cat: any;

  @Select(CategoryState.getCategory) getCategory$!: Observable<String[]>

  constructor(public count: CounterService,
    private router: Router) {

  }

  @Input() deviceXs: boolean;
  @Input() cartState: string

  ngOnInit(): void {

  }

  goToHomePage () {
    this.router.navigate(['/home'])
  }

  animate() {
    this.cartState = 'end'
  }

}
