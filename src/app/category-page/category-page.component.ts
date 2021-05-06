import { CategoriesService } from './../services/categories.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ItemListService, Paint } from '../services/item-list.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryPageComponent implements OnInit {

  catPaints: Paint;
  cat: any;

  constructor(public items: ItemListService,
    public category: CategoriesService,
    private route: ActivatedRoute) {

    this.category.loadCategory$().subscribe(data => {
      this.cat = data;
      console.log('cat', this.cat);
    } );

  }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.catPaints = this.items.getByCategory(params.category)
      console.log('Par', this.items)
});

  }


}
