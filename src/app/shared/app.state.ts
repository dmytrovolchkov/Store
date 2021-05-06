import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Paint } from '../services/item-list.service';

export interface ItemsStateModel {
  paint: Paint[],
  paintId: number
}

@State<ItemsStateModel>({
  name: 'items',
  defaults: {
    paint: [],
    paintId: null
  }
})


@Injectable()
export class ItemsState {

  @Selector()
  static getBestPaints(state: ItemsStateModel) {
      return [...state.paint].sort((a, b) => (a.sells > b.sells ? -1 : 1));
  }

}
