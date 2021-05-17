import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { addReview, getReview } from "./review.action";

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
    private http: HttpClient) {}

@Selector()
  static getReview(state: ReviewStateModel) {
    return state.review
}

@Action(getReview)
  getReview(get: StateContext<ReviewStateModel>){
  return this.http.get<Review[]>('http://localhost:3000/reviews')
  .subscribe(review => {get.setState({review: review})
  } )
}

@Action(addReview)
addReview({getState, patchState}: StateContext<ReviewStateModel>, {payload}: addReview) {
  this.http.post<Review>('http://localhost:3000/reviews', payload).subscribe(data=>{
    const state = getState();
    patchState({
      review: [...state.review, data]
    })
  })
}
}
