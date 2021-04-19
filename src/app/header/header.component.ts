import {Component, Input, OnInit, Output} from '@angular/core';
import {CounterService} from '../services/counter.service';
import {CategoriesService} from '../services/categories.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css',
              '../../bootstrap.css'],
})

export class HeaderComponent implements OnInit {

  cat: any;

  constructor(public count: CounterService, public category: CategoriesService) {
    this.category.loadCategory$().subscribe(data => {
      this.cat = data;
      console.log(this.cat);
    } );

  }

  @Input() deviceXs: boolean;

  ngOnInit(): void {
  }

}
