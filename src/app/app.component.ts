import {Component, OnDestroy, OnInit} from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { CounterService } from './services/counter.service';
import { ItemListService, Paint } from './services/item-list.service';
import {FormGroup} from '@angular/forms';
import {ReviewService} from './services/reviews.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  inputPhone = '380XXXXXXXXX';
  bestPaints: Paint[];
  interBest: Paint[];
  topPaints: Paint[];
  mostPaints: Paint[];
  review: FormGroup;

  constructor(public mediaObserver: MediaObserver,
              public appCounter: CounterService,
              public items: ItemListService,
              public reviews: ReviewService) {

    interval(3000)
      .pipe(
        map(v => {
            for (let i = 0; i < this.bestPaints.length / 2; i++) {
              this.interBest[i] = this.bestPaints[v % (this.bestPaints.length - 2) + i];
            }
        })
      )
      .subscribe();
  }
mediaSub: Subscription;
deviceXs: boolean;
  ngOnInit(): any {
    this.mediaSub = this.mediaObserver.media$.subscribe((result: MediaChange) => {
      console.log(result.mqAlias);
      this.deviceXs = result.mqAlias === 'xs';
      }
    );
    this.items.loadElement$().subscribe(data => {
      this.bestPaints = data.sort((a, b) => (a.sells > b.sells ? -1 : 1));
      this.topPaints = (data.slice(0)).sort((a, b) => (a.rating < b.rating ? -1 : 1));
      this.mostPaints = (data.slice(0)).sort((a, b) => (a.popular > b.popular ? -1 : 1));
      this.interBest = this.bestPaints.slice(0, 3);
      console.log(data);
    } );
    this.reviews.loadReview$().subscribe(data => {
        this.review = data;
        console.log(data);
      }
    );

  }
  ngOnDestroy(): any {
    this.mediaSub.unsubscribe();
  }

  onInput(event?): any {
    this.inputPhone = event.target.value;
    event.target.value = '';
  }

}
