import { getCategory } from './category.action';
import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';

export interface CategoryStateModel {
  category: String[],
}

@State<CategoryStateModel>({
  name: 'categories',
  defaults: {
    category: [],
  }
})

@Injectable()
export class CategoryState {

  constructor (
    private http: HttpClient) {}

  @Selector()
static getCategory(state: CategoryStateModel) {
    return state.category
}

@Action(getCategory)
getCategory(get: StateContext<CategoryStateModel>){
return this.http.get<String[]>('http://localhost:3000/categories')
.subscribe(category => {get.setState({category: category})
} );
}

}
