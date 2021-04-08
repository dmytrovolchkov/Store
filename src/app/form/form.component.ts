import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  email: FormControl;
  name: FormControl;
  score: FormControl;

  ngOnInit(): void {
    this.form = new FormGroup({});
    this.name = new FormControl('',
      [Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(20)]);
    this.email = new FormControl('',
      [Validators.required,
                    Validators.email]);
    this.score = new FormControl('',
                      Validators.required);
  }

  getErrorMessage(): any {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
    if (this.score.hasError('required')) {
      return 'You must type a score';
    }
  }

  submit(): any {
    if (this.form.valid) {
      console.log('Form ', this.form);
      const formData = {...this.form.value};

      console.log('Form data ', formData);

      this.form.reset();
    }
  }
}
