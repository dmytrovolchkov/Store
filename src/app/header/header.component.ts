import {Component, Input, OnInit, Output} from '@angular/core';
import {CounterService} from '../services/counter.service';
import {CategoriesService} from '../services/categories.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css',],
})

export class HeaderComponent implements OnInit {

  cat: any;

  constructor(public count: CounterService,
    public category: CategoriesService,
    private router: Router) {
    this.category.loadCategory$().subscribe(data => {
      this.cat = data;
      console.log(this.cat);
    } );

  }

  @Input() deviceXs: boolean;

  ngOnInit(): void {
  }

  goToHomePage () {
    this.router.navigate(['/home'])
  }

}
