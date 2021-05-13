import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs/operators";
import { ReviewService } from "../services/reviews.service";
import { addReview, getReview, getReviewById} from "./review.action";

export interface Review {
  id: number
  num: number
  name: string
  email: string
  score: number
  comment: string
}

export interface ReviewStateModel {
  review: Review[],
}

@State<ReviewStateModel>({
  name: 'reviews',
  defaults: {
    review: []
  }
})

@Injectable()
export class ReviewState {

  constructor (
    private http: HttpClient,
    private reviewService: ReviewService) {}

@Selector()
  static getReview(state: ReviewStateModel) {
    return state.review
}

@Action(getReview)
  getReview(get: StateContext<ReviewStateModel>){
  return this.http.get<Review[]>('http://localhost:3000/reviews')
  .subscribe(review => {get.setState({review: review})
  } );
}

@Action(addReview)
addReview({getState, patchState}: StateContext<ReviewStateModel>, {payload}: addReview) {
  this.http.post<Review>('http://localhost:3000/reviews', payload).subscribe(result=>{
    const state = getState();
    patchState({
      review: [...state.review, result]
    })
  })
}

@Selector()
  static getReviewById(state: ReviewStateModel) {
    return state.review
}

@Action(getReviewById)
getReviewById(get: StateContext<ReviewStateModel>, {payload}: getReviewById){
  const post = this.http.get<Review[]>('http://localhost:3000/reviews')
  .subscribe(review => {get.setState({review: review})
  return post.filter(p => p.num === payload)
  } );
}

//   this.loadReview$().subscribe(data => {
//     this.post = data});
//   return this.post.filter(p => p.num === id)
// }


// getReviewById(id: number) {
//   this.loadReview$().subscribe(data => {
//     this.post = data});
//   return this.post.filter(p => p.num === id)
// }

// getByIdRev(get: StateContext<ReviewStateModel>){
//   return this.http.get<Review[]>('http://localhost:3000/reviews')
//   .subscribe(review => {get.setState({review: review})
//   } );
// }




}
