import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectCartState=(state:AppState)=>state.cart;
export const selectProducts=createSelector(
    selectCartState,
    state=>state.products
)
export const selectTotal=createSelector(
    selectCartState,
    state=>state.totalPrice
)
export const selectQuantity=createSelector(
    selectCartState,
    state=>state.totalQuantity
)