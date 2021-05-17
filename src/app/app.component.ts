import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Store } from '@ngxs/store';
import { getCategory } from './category-page/category.action';
import { fetchPaint } from './paint/paint.action';
import { getReview } from './review/review.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponent implements OnInit, OnDestroy {

  constructor(public mediaObserver: MediaObserver,
    private store: Store) { }

  ngOnInit(): any {

    this.store.dispatch(new fetchPaint())
    this.store.dispatch(new getCategory())
    this.store.dispatch(new getReview())

  }

  ngOnDestroy(): any {}

}
