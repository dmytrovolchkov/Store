import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ItemListService, Paint } from '../services/item-list.service';
import { Review, ReviewService } from '../services/reviews.service';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MediaObserver } from '@angular/flex-layout';
import { CounterService } from '../services/counter.service';
import { CategoriesService } from '../services/categories.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Select } from '@ngxs/store';
import { ItemsState } from '../shared/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HomeComponent implements OnInit {
  bestPaints: Paint[];
  interBest: Paint[];
  topPaints: Paint[];
  mostPaints: Paint[];
  review: Review[];
  cat: any;



  @Select(ItemsState.getBestPaints) bestPaints$: Observable<Paint[]>

  constructor(public mediaObserver: MediaObserver,
    public appCounter: CounterService,
    public items: ItemListService,
    public reviews: ReviewService,
    public category: CategoriesService,
    private route: ActivatedRoute)  {

      this.category.loadCategory$().subscribe(data => {
        this.cat = data;
        console.log(this.cat);
      } );

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

    this.bestPaints$.subscribe(bestPaints => this.bestPaints = bestPaints)
    console.log(this.bestPaints);


  this.items.loadElement$().subscribe(data => {
    this.bestPaints = data.sort((a, b) => (a.sells > b.sells ? -1 : 1));
    this.topPaints = (data.slice(0)).sort((a, b) => (a.rating < b.rating ? -1 : 1)).slice(0, 3);
    this.mostPaints = (data.slice(0)).sort((a, b) => (a.popular > b.popular ? -1 : 1)).slice(0, 3);
    this.interBest = this.bestPaints.slice(0, 3);
    console.log(data);
  } );

  this.route.params.subscribe((params: Params) => {
    this.reviews.getByIdRev(+params.id)
    this.items.getById(+params.id)
  })


}

}
