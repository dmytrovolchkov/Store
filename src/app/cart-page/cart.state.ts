import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
// import { addToCart } from "./cart.action";
import { patch, append } from '@ngxs/store/operators';
import { getCart } from "./cart.action";

export interface CartStateModel {
  ids: number[]
}

@State<CartStateModel>({
  name: 'cart',
  defaults: {
    ids: [1, 2]
  }
})

@Injectable()
export class CartState {

  constructor () {}

@Selector()
  static getCart(state: CartStateModel) {
    return state.ids
}

@Action(getCart)
getCart(get: StateContext<CartStateModel>) {
  return this.getCart
}
}


// @Action(addToCart)
// addToCart(add: StateContext<CartStateModel>, { payload }: addToCart){
//   add.setState(
//     patch({
//       ids: append([payload])
//     })
//   )
// }


// @Action(AddZebra)
// addZebra(ctx: StateContext<AnimalsStateModel>, { payload }: AddZebra) {
//   ctx.setState(
//     patch({
//       zebras: append([payload])
//     })
//   );
// }

// @Action(addReview)
// addReview({getState, patchState}: StateContext<CartStateModel>, {payload}: addReview) {
//   this.http.post<Review>('http://localhost:3000/reviews', payload).subscribe(data=>{
//     const state = getState();
//     patchState({
//       review: [...state.review, data]
//     })
//   })
// }
// }
