import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MediaObserver } from '@angular/flex-layout';
import { CounterService } from '../services/counter.service';
import { Select, Store } from '@ngxs/store';
import { Paint, PaintState } from './../paint/paint.state';
import { CategoryState } from '../category-page/category.state';
import { Review, ReviewState } from '../review/review.state';
import { getReview } from '../review/review.action';
import { fetchPaint } from '../paint/paint.action';
import { getCategory } from '../category-page/category.action';
import { Title } from '@angular/platform-browser';

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
  cat: any;
  subscription: any;
  subscription2: any;

  @Select(PaintState.getPaint) getPaint$!: Observable<Paint[]>
  @Select(CategoryState.getCategory) getCategory$!: Observable<String[]>
  @Select(ReviewState.getReview) getReview$!: Observable<Review[]>

  constructor(public mediaObserver: MediaObserver,
    public appCounter: CounterService,
    private title: Title)  {

      this.title.setTitle('Freshnesecom')

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

    this.subscription = this.getPaint$.subscribe(data => {
      this.bestPaints = data.sort((a, b) => (a.sells > b.sells ? -1 : 1));
      this.topPaints = (data.slice(0)).sort((a, b) => (a.rating < b.rating ? -1 : 1)).slice(0, 3);
      this.mostPaints = (data.slice(0)).sort((a, b) => (a.popular > b.popular ? -1 : 1)).slice(0, 3);
      this.interBest = this.bestPaints.slice(0, 3);
    })

    this.subscription2 = this.getCategory$.subscribe(data => {
      this.cat = data;
    })

}

ngOnDestroy(): void {

  this.subscription.unsubscribe();
  this.subscription2.unsubscribe();

}

}
