import {Component, OnDestroy, OnInit} from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { CounterService } from './services/counter.service';
import { ItemListService } from './services/item-list.service';

export interface Paint {
  imageUrl: string;
  title: string;
  author: string;
  year: number;
  price: number;
  sells: number;
  rating: number;
  popular: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {

  bestPaints: Paint[];
  interBest: Paint[];
  topPaints: Paint[];
  mostPaints: Paint[];

  constructor(public mediaObserver: MediaObserver, public appCounter: CounterService, public Items: ItemListService) {

    Items.Best$().subscribe ( paints => {
      this.bestPaints = paints; });
    this.interBest = this.bestPaints.slice(0, 3);
    Items.Top$().subscribe( paints => {
      this.topPaints = paints; });

    Items.Most$().subscribe( paints => {
      this.mostPaints = paints; });

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
  }
  ngOnDestroy(): any {
    this.mediaSub.unsubscribe();
  }

}
