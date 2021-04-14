import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) {}

  loadReview$(): any {
    return this.http.get('http://localhost:3000/reviews');
  }

}
