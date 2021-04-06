import { Injectable } from '@angular/core';
import { Paint } from '../app.component';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemListService {

    paints: Paint[] = [
      {
        imageUrl: 'https://struchaieva.art/media/artworks/previews/Soul-of-Azori-I-150_100-cm_Al9Axr5.jpeg',
        title: 'Azori Soul',
        author: 'James Pello',
        year: 2018,
        price: 171519,
        sells: 5,
        rating: 5,
        popular: 347,
      },
      {
        imageUrl: 'https://struchaieva.art/media/artworks/previews/Meeting-of-the-Giants-min_oJYZdGB.jpeg',
        title: 'Giants Meet',
        author: 'Paul Mann',
        year: 2015,
        price: 116025,
        sells: 36,
        rating: 3,
        popular: 3332,
      },
      {
        imageUrl: 'https://struchaieva.art/media/artworks/previews/5_o7679ex.jpeg',
        title: 'Flower Eye',
        author: 'Jane Subb',
        year: 2019,
        price: 195900,
        sells: 13,
        rating: 1,
        popular: 3423,
      },
      {
        imageUrl: 'https://struchaieva.art/media/artworks/previews/3_YjENyDZ.jpeg',
        title: 'Body Music',
        author: 'Paul Mann',
        year: 2015,
        price: 386629,
        sells: 2,
        rating: 6,
        popular: 143,
      },
      {
        imageUrl: 'https://struchaieva.art/media/artworks/previews/gggg-1_NRPv2zN.jpeg',
        title: 'Dialog',
        author: 'James Pello',
        year: 2020,
        price: 414375,
        sells: 10,
        rating: 4,
        popular: 13413,
      },
      {
        imageUrl: 'https://struchaieva.art/media/artworks/previews/cvetochnaya-rapsodia_LN6t4IC.jpeg',
        title: 'Flower Rapsody',
        author: 'Jane Subb',
        year: 2016,
        price: 643906,
        sells: 11,
        rating: 2,
        popular: 2013,
      },
    ];

  getBest$: Observable<Paint[]> = of (this.paints.sort((a, b) => (a.sells > b.sells ? -1 : 1)));

  getTop$: Observable<Paint[]> = of ((this.paints.slice(0)).sort((a, b) => (a.rating < b.rating ? -1 : 1)));

  getMost$: Observable<Paint[]> = of ((this.paints.slice(0)).sort((a, b) => (a.popular > b.popular ? -1 : 1)));

}
