import { addToCart } from './cart.action';
import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';

export interface CartStateModel {
  ids: number[],
}

@State<CartStateModel>({
  name: 'cart',
  defaults: {
    ids: []
  }
})

@Injectable()
export class CartState {

  constructor () {}

  @Selector()
  static getCart(state: CartStateModel) {
      return state.ids
  }

  @Action(addToCart)
  addToCart(ctx: StateContext<CartStateModel>, { payload }: addToCart) {
    const state = ctx.getState()
    ctx.setState({
      ids: [...state.ids, payload]
    })
    return payload
}


}
