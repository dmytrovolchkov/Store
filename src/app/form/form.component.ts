import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Review, ReviewService} from '../services/reviews.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  re: Review[];

  constructor(public reviews: ReviewService, public http: HttpClient) {
    this.reviews.loadReview$().subscribe(data => {
        this.re = data;
        console.log(data);
      }
    );
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
    });
  }

  getErrorMessage(): any {
    if (this.form.get('email').hasError('required')) {
      return 'You must enter a value';
    }
    return this.form.get('email').hasError('email') ? 'Not a valid email' : '';
  }

  submit(): any {
    if (this.form.valid) {
      const post: Review = {
        name: this.form.value.name,
        email: this.form.value.email,
        score: this.form.value.score,
        comment: this.form.value.comment
      };
      const formData = {...this.form.value};
      this.form.reset();
      this.form.markAsPristine();
      this.form.markAsUntouched();
      console.log('Form data ', formData);
      this.http.post<Review>('http://localhost:3000/reviews', post)
      .subscribe(data => {
        this.re.push(data);
        console.log('Form data 2', formData);
        }
      );


    }
  }
}
