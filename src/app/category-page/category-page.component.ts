// import { CategoriesService } from './../services/categories.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ItemListService, Paint } from '../services/item-list.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { getCategory } from './category.action';
import { CategoryState } from './category.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryPageComponent implements OnInit {

  catPaints: Paint;
  cat: any;
  subscription: any;

  @Select(CategoryState.getCategory) getCategory$!: Observable<String[]>

  constructor(public items: ItemListService,
              private route: ActivatedRoute,
              public store: Store,) {

    this.subscription = this.getCategory$.subscribe(data => {
      this.cat = data;
    })
  }

  ngOnInit(): void {

    this.store.dispatch(new getCategory())

    this.route.params.subscribe((params: Params) => {
      this.catPaints = this.items.getByCategory(params.category)
      console.log('Par', this.items)
});

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();

  }


}
