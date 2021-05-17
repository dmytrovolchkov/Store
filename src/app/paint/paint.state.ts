import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';
import { fetchPaint } from './paint.action';

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

  @Selector()
  static getBestPaints(state: PaintStateModel) {
      return state.paint.sort((a, b) => (a.sells > b.sells ? -1 : 1))
  }

  @Selector()
  static getTopPaints(state: PaintStateModel) {
      return (state.paint.slice(0)).sort((a, b) => (a.rating < b.rating ? -1 : 1)).slice(0, 3)
  }

  @Selector()
  static getMostPaints(state: PaintStateModel) {
      return (state.paint.slice(0)).sort((a, b) => (a.popular > b.popular ? -1 : 1)).slice(0, 3);
  }

  @Selector()
  static getIntervalPaints(state: PaintStateModel) {
      const temp = state.paint.sort((a, b) => (a.sells > b.sells ? -1 : 1));
      return temp.slice(0, 3)
  }

  @Action(fetchPaint)
  fetchPaint(fetch: StateContext<PaintStateModel>){
    return this.http.get<Paint[]>('http://localhost:3000/paints')
    .subscribe(paint => {fetch.setState({paint: paint})
  } );
}

}
