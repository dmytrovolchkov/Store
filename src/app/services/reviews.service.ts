import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Review } from '../review/review.state';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  post: Review[] = [];

  constructor(private http: HttpClient) {}

  // loadReview$(): any {
  //   return this.http.get('http://localhost:3000/reviews')
  // }

  // // addReview$(review: Review): Observable<Review>{
  // //   return this.http.post<Review>('http://localhost:3000/reviews', review)
  // // }

  // getByIdRev(id: number) {
  //   this.loadReview$().subscribe(data => {
  //     this.post = data});
  //   return this.post.filter(p => p.num === id)
  // }

}
