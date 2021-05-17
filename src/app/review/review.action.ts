import { Review } from "./review.state"

export class getReview {
  static readonly type = '[REVIEW] getReview'

}

export class addReview {
  static readonly type = '[REVIEW] addReview'

  constructor(public payload: Review) {}

}

export class AddReviewSuccess {
  static readonly type = '[REVIEW] addReviewSuccess'

  constructor(public payload: Review) {}
}

export class AddReviewFail {
  static readonly type = '[REVIEW] addReviewFail'

  constructor(public payload: any) {}
}
