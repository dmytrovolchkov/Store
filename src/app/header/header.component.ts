import {Component, Input, OnInit, Output} from '@angular/core';
import {CounterService} from '../services/counter.service';
import {CategoriesService} from '../services/categories.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {

  constructor(public count: CounterService, public category: CategoriesService) { }

  @Input() deviceXs: boolean;

  ngOnInit(): void {
  }

}
