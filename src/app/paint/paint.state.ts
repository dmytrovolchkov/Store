import { Paint } from './../services/item-list.service';
import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';
import { fetchPaint, getByIdPaint } from './paint.action';

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


//   @Selector()
// static getByIdPaint(state: PaintStateModel) {
//     return state.paint
// }

//   @Action(getByIdPaint)
//   getByIdPaint(getById: StateContext<PaintStateModel>, id: number){
//     return this.http.get<Paint[]>('http://localhost:3000/paints')
//     .subscribe(paint => {getById.setState({paint: paint.find(p => p.id === id)[0]})
//   } );
// }

}
