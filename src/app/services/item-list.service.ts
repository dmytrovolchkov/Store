import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Paint {
  id: number;
  imageUrl: string;
  title: string;
  author: string;
  category: string;
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

  getById(id: number) {
    this.loadElement$().subscribe(data => {
      this.paint = data});
    return this.paint.find(p => p.id === id);
  }

  getByCategory(category: string) {
    this.loadElement$().subscribe(data => {
      this.paint = data});
    return this.paint.find(p => p.category === category);
  }

}
