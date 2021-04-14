import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;

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
      const formData = {...this.form.value};
      console.log('Form data ', formData);
      this.form.reset();
      this.form.markAsPristine();
      this.form.markAsUntouched();

    }
  }
}
