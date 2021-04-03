import {Component, Input, OnInit, Output} from '@angular/core';
import {CounterService} from '../services/counter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {

  inputPhone = '380XXXXXXXXX';

  constructor(public count: CounterService) { }

  @Input() deviceXs: boolean;

  ngOnInit(): void {
  }

  onInput(event?): any {
    this.inputPhone = event.target.value;
    event.target.value = '';
  }

}
