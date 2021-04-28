import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Review {
  id: number;
  name: string;
  email: string;
  score: string;
  comment: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  post: Review[] = [];

  constructor(private http: HttpClient) {}

  loadReview$(): any {
    return this.http.get('http://localhost:3000/reviews');
  }

  addReview$(): any {
    return this.http.post<Review>('http://localhost:3000/reviews', this.post);
  }

  getByIdRev(id: number) {
    this.loadReview$().subscribe(data => {
      this.post = data});
    return this.post.find(p => p.id === id);
  }

}
