import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MediaObserver } from '@angular/flex-layout';
import { CounterService } from '../services/counter.service';
import { Select } from '@ngxs/store';
import { Paint, PaintState } from './../paint/paint.state';
import { CategoryState } from '../category-page/category.state';
import { Review, ReviewState } from '../review/review.state';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HomeComponent implements OnInit {
  bestPaints: Paint[];
  interBest: Paint[];
  topPaints: Paint[];
  mostPaints: Paint[];
  subscription: any;
  subscription2: any;

  @Select(PaintState.getPaint) getPaint$: Observable<Paint[]>
  @Select(PaintState.getBestPaints) getBestPaints$: Observable<Paint[]>
  @Select(PaintState.getTopPaints) getTopPaints$: Observable<Paint[]>
  @Select(PaintState.getMostPaints) getMostPaints$: Observable<Paint[]>
  @Select(PaintState.getIntervalPaints) getIntervalPaints$: Observable<Paint[]>
  @Select(CategoryState.getCategory) getCategory$: Observable<String[]>
  @Select(ReviewState.getReview) getReview$: Observable<Review[]>

  constructor(public mediaObserver: MediaObserver,
    public appCounter: CounterService,
    private title: Title,
    private ref: ChangeDetectorRef)  {

    this.title.setTitle('Freshnesecom')

    interval(2000)
    .pipe(
    map(v => {
      for (let i = 0; i < 3; i++)
      {this.interBest[i] = this.bestPaints[v % (this.bestPaints?.length - 2) + i]}
      this.interBest.slice(0, 3)
      this.ref.detectChanges()
    })).subscribe()
}

  ngOnInit(): any {

    this.subscription = this.getBestPaints$.subscribe(data => this.bestPaints = data)
    this.subscription2 = this.getIntervalPaints$.subscribe(data => this.interBest = data)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();

}
}
