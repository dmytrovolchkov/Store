import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponent implements OnInit, OnDestroy {

  constructor(public mediaObserver: MediaObserver) { }

  ngOnInit(): any {}

  ngOnDestroy(): any {}

}
