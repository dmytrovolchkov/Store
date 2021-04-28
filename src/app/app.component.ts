import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  inputPhone = '380XXXXXXXXX';

  constructor(public mediaObserver: MediaObserver) { }

  ngOnInit(): any {}

  ngOnDestroy(): any {}

  onInput(event?): any {
    this.inputPhone = event.target.value;
    event.target.value = '';
  }


}
