import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

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
export class AppComponent {
  paints: Paint[] = [
    {imageUrl: 'https://struchaieva.art/media/artworks/previews/Soul-of-Azori-I-150_100-cm_Al9Axr5.jpeg',
      title: 'Azori Soul',
      author: 'James Pello',
      year: 2018,
      price: 171519,
      sells: 5,
      rating: 5,
      popular: 347,
    },
    {imageUrl: 'https://struchaieva.art/media/artworks/previews/Meeting-of-the-Giants-min_oJYZdGB.jpeg',
      title: 'Giants Meet',
      author: 'Paul Mann',
      year: 2015,
      price: 116025,
      sells: 36,
      rating: 3,
      popular: 3332,
    },
    {imageUrl: 'https://struchaieva.art/media/artworks/previews/5_o7679ex.jpeg',
      title: 'Flower Eye',
      author: 'Jane Subb',
      year: 2019,
      price: 195900,
      sells: 13,
      rating: 1,
      popular: 3423,
    },
    {imageUrl: 'https://struchaieva.art/media/artworks/previews/3_YjENyDZ.jpeg',
      title: 'Body Music',
      author: 'Paul Mann',
      year: 2015,
      price: 386629,
      sells: 2,
      rating: 6,
      popular: 143,
    },
    {imageUrl: 'https://struchaieva.art/media/artworks/previews/gggg-1_NRPv2zN.jpeg',
      title: 'Dialog',
      author: 'James Pello',
      year: 2020,
      price: 414375,
      sells: 10,
      rating: 4,
      popular: 13413,
    },
    {imageUrl: 'https://struchaieva.art/media/artworks/previews/cvetochnaya-rapsodia_LN6t4IC.jpeg',
      title: 'Flower Rapsody',
      author: 'Jane Subb',
      year: 2016,
      price: 643906,
      sells: 11,
      rating: 2,
      popular: 2013,
    },
  ];

  bestPaints = this.paints.sort((a, b) => (a.sells > b.sells ? -1 : 1));

  sortArr = this.paints.slice(0);
  topPaints = this.sortArr.sort((a, b) => (a.rating < b.rating ? -1 : 1));

  sortArr2 = this.paints.slice(0);
  mostPaints = this.sortArr2.sort((a, b) => (a.popular > b.popular ? -1 : 1));

  interBest = this.bestPaints.slice(0, 3);
  private n = 6;

  constructor() {

    const intervalStream$ = interval(3000)
      .pipe(
        map(v => {
            for (let i = 0; i < this.n / 2; i++) {
              this.interBest[i] = this.bestPaints[v % (this.n - 2) + i];
            }
        }
        )
      )
      .subscribe();

  }

}
