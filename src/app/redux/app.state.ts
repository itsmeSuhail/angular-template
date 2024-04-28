import { CartState } from "./cart/cart.reducer";
import { counterState } from "./counter/counter.redcuer";

export interface AppState{
    counter:counterState,
    cart:CartState,
}