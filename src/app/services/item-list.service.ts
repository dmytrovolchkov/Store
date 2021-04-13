import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

@Injectable({
  providedIn: 'root'
})
export class ItemListService {

  paint: Paint[] = [];

  constructor(private http: HttpClient) {
    this.loadElement$().subscribe(data => {
      console.log(data);
      this.paint = data;
    });
  }

loadElement$(): any {
  return this.http.get<Paint[]>('assets/package.json');
}

  Best$(): any {
    return of(this.paint.sort((a, b) => (a.sells > b.sells ? -1 : 1)));
  }
  Top$(): any {
    return of ((this.paint.slice(0)).sort((a, b) => (a.rating < b.rating ? -1 : 1)));
  }
  Most$(): any {
    return of ((this.paint.slice(0)).sort((a, b) => (a.popular > b.popular ? -1 : 1)));
  }
}
