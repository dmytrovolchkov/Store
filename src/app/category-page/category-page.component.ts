import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { CategoryState } from './category.state';
import { Observable } from 'rxjs';
import { Paint, PaintState } from '../paint/paint.state';
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
  categoryRout: string

  @Select(CategoryState.getCategory) getCategory$!: Observable<String[]>
  @Select(PaintState.getPaint) getPaint$!: Observable<Paint[]>

  constructor(private route: ActivatedRoute,
              public store: Store,
              private title: Title) {
  }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.categoryRout = params.category
      this.getPaint$.subscribe(data => {
        this.catPaints = data?.filter(p => p.category === params.category)
        this.title.setTitle(this.categoryRout)
      })
  });
}

  ngOnDestroy(): void {

  }

}
