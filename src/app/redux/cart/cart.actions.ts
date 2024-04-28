import { createAction, props } from "@ngrx/store";
import { ProductType } from "../../models/product.model";

export const addToCart=createAction("[Cart Component] addToCart",props<{product:ProductType}>());
export const incrementProduct=createAction("[Cart Component] incrementProduct",props<{productId:number}>());
export const decrementProduct=createAction("[Cart Component] decrementProduct",props<{productId:number}>());