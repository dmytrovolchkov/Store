import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';

export interface Review {
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

}
