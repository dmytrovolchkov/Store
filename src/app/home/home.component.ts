import { fetchPaint, getByIdPaint } from '../paint/paint.action';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ItemListService, Paint } from '../services/item-list.service';
import { ReviewService } from '../services/reviews.service';
import { interval, Observable, ObservedValueOf } from 'rxjs';
import { map } from 'rxjs/operators';
import { MediaObserver } from '@angular/flex-layout';
import { CounterService } from '../services/counter.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { PaintState } from './../paint/paint.state';
import { getCategory } from '../category-page/category.action';
import { CategoryState } from '../category-page/category.state';
import { Review } from '../review/review.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HomeComponent implements OnInit {
  bestPaints: Paint[];
  interBest: Paint[];
  topPaints: Paint[];
  mostPaints: Paint[];
  review: Review[];
  cat: any;
  subscription: any;
  subscription2: any;

  @Select(PaintState.getPaint) getPaint$!: Observable<Paint[]>
  @Select(CategoryState.getCategory) getCategory$!: Observable<String[]>
  // @Select(PaintState.getByIdPaint) getByIdPaint$!: Observable<Paint[]>

  constructor(public mediaObserver: MediaObserver,
    public appCounter: CounterService,
    public items: ItemListService,
    public reviews: ReviewService,
    private route: ActivatedRoute,
    public store: Store,)  {

interval(3000)
.pipe(
map(v => {
  for (let i = 0; i < 3; i++) {
    this.interBest[i] = this.bestPaints[v % (this.bestPaints.length - 2) + i];
  }
})
)
.subscribe();
}

  ngOnInit(): any {

    this.store.dispatch(new fetchPaint())
    this.store.dispatch(new getCategory())
    // this.store.dispatch(new getByIdPaint())

    this.subscription = this.getPaint$.subscribe(data => {
      this.bestPaints = data.sort((a, b) => (a.sells > b.sells ? -1 : 1));
      this.topPaints = (data.slice(0)).sort((a, b) => (a.rating < b.rating ? -1 : 1)).slice(0, 3);
      this.mostPaints = (data.slice(0)).sort((a, b) => (a.popular > b.popular ? -1 : 1)).slice(0, 3);
      this.interBest = this.bestPaints.slice(0, 3);
    })

    this.subscription2 = this.getCategory$.subscribe(data => {
      this.cat = data;
    })


    this.route.params.subscribe((params: Params) => {
      // this.reviews.getByIdRev(+params.id)
      this.items.getById(+params.id)
    })

}

ngOnDestroy(): void {
  this.subscription.unsubscribe();

}

}
