import { CategoriesService } from './../services/categories.service';
import { Component, OnInit } from '@angular/core';
import { ItemListService, Paint } from '../services/item-list.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {

  topPaints: Paint[];
  cat: any;

  constructor(public items: ItemListService,
    public category: CategoriesService) {

    this.category.loadCategory$().subscribe(data => {
      this.cat = data;
      console.log(this.cat);
    } );
  }

  ngOnInit(): void {
    this.items.loadElement$().subscribe(data => {
      this.topPaints = (data.slice(0)).sort((a, b) => (a.rating < b.rating ? -1 : 1));
      console.log(data);
    } );
  }

}
