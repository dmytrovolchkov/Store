import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { getCategory } from './category.action';
import { CategoryState } from './category.state';
import { Observable } from 'rxjs';
import { Paint, PaintState } from '../paint/paint.state';
import { fetchPaint } from '../paint/paint.action';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryPageComponent implements OnInit {

  catPaints: Paint[]
  cat: any
  category: string
  subscription: any

  @Select(CategoryState.getCategory) getCategory$!: Observable<String[]>
  @Select(PaintState.getPaint) getPaint$!: Observable<Paint[]>

  constructor(private route: ActivatedRoute,
              public store: Store,
              private title: Title) {

    this.subscription = this.getCategory$.subscribe(data => {
      this.cat = data;
    })
  }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.getPaint$.subscribe(data => {
        this.catPaints = data.filter(p => p.category == params.category)
        this.category = params.category
        this.title.setTitle(this.category)
      })
      console.log('Par', this.catPaints)
});
}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();

  }


}
