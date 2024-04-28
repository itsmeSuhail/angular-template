import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { productState } from "./product.redcuer";
export const selectProductState=(state:AppState)=>state.counter;
export const selectProductFeatures=createFeatureSelector<productState>('product');
export const selectAllProducts=createSelector(
selectProductFeatures,
(state:productState)=>state.products
)
export const selectProductLoading=createSelector(
    selectProductFeatures,
    (state:productState)=>state.loading
    )
export const selectProductError=createSelector(
    selectProductFeatures,
    (state:productState)=>state.error
    )
    