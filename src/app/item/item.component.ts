import { getReviewById } from './../review/review.action';
import { CounterService } from './../services/counter.service';
import { ReviewService } from './../services/reviews.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Paint, ItemListService } from '../services/item-list.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Review, ReviewState } from '../review/review.state';
import { addReview, getReview, getReviewById } from '../review/review.action';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ItemComponent implements OnInit {

  form: FormGroup
  post: Review
  rev: Review[]
  rev2: Review[]
  todoName = ''
  todoEmail = ''
  todoScore: number
  todoComment = ''
  item: Paint
  num: number
  i = 0

  @Select(ReviewState.getReview) getReview$!: Observable<Review[]>
  @Select(ReviewState.getReviewById) getReviewById$!: Observable<Review[]>

  constructor(private route: ActivatedRoute,
    private items: ItemListService,
    private review: ReviewService,
    public http: HttpClient,
    public appCount: CounterService,
    public store: Store) {

      this.getReview$.subscribe(data => {
      this.rev2 = data
      console.log('rev2 ', data)
    }
  );
    }

  ngOnInit(): void {

    this.store.dispatch(new getReview())

    this.form = new FormGroup({
      name: new FormControl('',
        [Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20)]),
      email: new FormControl('',
        [Validators.required,
          Validators.email]),
      score: new FormControl('',
        Validators.required),
      comment: new FormControl('',
        Validators.maxLength(1000))
    })

    this.route.params.subscribe((params: Params) => {
      this.rev = this.store.dispatch(new getReviewById(+params.id))
      // this.rev = this.review.getByIdRev(+params.id)
      this.item = this.items.getById(+params.id)
      console.log('Params', this.item)
      console.log('Params2', this.rev)
    })
    this.i = this.rev.length;
  }

  getErrorMessage(): any {
    if (this.form.get('email').hasError('required')) {
      return 'You must enter a value';
    }
    return this.form.get('email').hasError('email') ? 'Not a valid email' : '';
  }

  submit(): any {
    if (this.form.valid) {
      const formData = {...this.form.value}
      this.form.reset()
      this.form.markAsPristine()
      this.form.markAsUntouched()
      console.log('Form data ', formData)
    }
  }

  addPost() {
    this.route.params.subscribe((params: Params) => {
      this.item = this.items.getById(+params.id)
      console.log('Paramsssssssssss', this.item) });
      this.getReview$.subscribe(data => {
        this.rev2 = data;
        console.log('rev2222 ', this.rev2.length);
      }
    );
      this.post = {
        id: this.rev2.length + 1,
        num: this.item.id,
        name: this.todoName,
        email: this.todoEmail,
        score: this.todoScore,
        comment: this.todoComment
      };

      this.store.dispatch(new addReview(this.post))

    // this.http.post<Review>('http://localhost:3000/reviews', post)
    //   .subscribe(data => {
    //     console.log('Form data 2', data);
    //     }
    //   );
  }



}
