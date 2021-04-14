import { Injectable } from '@angular/core';
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

  constructor(private http: HttpClient) {}

  loadElement$(): any {
    return this.http.get<Paint[]>('http://localhost:3000/paints');
  }

}
