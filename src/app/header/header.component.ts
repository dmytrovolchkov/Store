import {ChangeDetectionStrategy, Component, Input, OnInit, Output} from '@angular/core';
import {CounterService} from '../services/counter.service';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { getCategory } from './../category-page/category.action';
import { CategoryState } from './../category-page/category.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css',],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeaderComponent implements OnInit {

  cat: any;

  @Select(CategoryState.getCategory) getCategory$!: Observable<String[]>

  constructor(public count: CounterService,
    private router: Router,
    private store: Store) {

      this.getCategory$.subscribe(data => {
        this.cat = data
        console.log('Category ', this.cat)
      })
  }

  @Input() deviceXs: boolean;

  ngOnInit(): void {

    // this.store.dispatch(new getCategory())

  }

  goToHomePage () {
    this.router.navigate(['/home'])
  }

}
