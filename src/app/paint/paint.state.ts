import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';
import { fetchPaint, getByIdPaint } from './paint.action';

export interface Paint {
  id: number;
  imageUrl: string;
  title: string;
  author: string;
  category: string;
  year: number;
  price: number;
  sells: number;
  rating: number;
  popular: number;
}

export interface PaintStateModel {
  paint: Paint[],
}

@State<PaintStateModel>({
  name: 'paints',
  defaults: {
    paint: []
  }
})

@Injectable()
export class PaintState {

  constructor (
    private http: HttpClient) {}

  @Selector()
  static getPaint(state: PaintStateModel) {
      return state.paint
  }

  @Action(fetchPaint)
  fetchPaint(fetch: StateContext<PaintStateModel>){
    return this.http.get<Paint[]>('http://localhost:3000/paints')
    .subscribe(paint => {fetch.setState({paint: paint})
  } );
}

}
