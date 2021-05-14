import { CounterService } from './../services/counter.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Review, ReviewState } from '../review/review.state';
import { addReview, getReview } from '../review/review.action';
import { Paint, PaintState } from '../paint/paint.state';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

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
  subscription: any

  @Select(ReviewState.getReview) getReview$!: Observable<Review[]>
  @Select(PaintState.getPaint) getPaint$!: Observable<Paint[]>

  constructor(private route: ActivatedRoute,
    public http: HttpClient,
    public appCount: CounterService,
    public store: Store,
    private title: Title,
    private meta: Meta) {
    }

  ngOnInit(): void {

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
      this.getReview$.subscribe(data => {
        this.rev = data.filter(p => p.num == params.id)
      })
      this.getPaint$.subscribe(data => {
        this.item = data.filter(p => p.id == params.id)[0]
        this.title.setTitle(this.item.title)
        this.meta.addTags([
          {name: 'keywords', content: 'angular, paint, itemcomponent'},
          {name: 'description', content: 'This item is '+this.item.title+' painted by '+this.item.author}
         ] )
      })
    this.i = this.rev.length;
  })}

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

  }
}
