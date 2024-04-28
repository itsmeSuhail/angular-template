import { createAction, props } from "@ngrx/store";
import { ProductType } from "../../models/product.model";

export const loadProduct=createAction("[Product Component] loadProduct");
export const SuccessProduct=createAction("[Product Component] SuccessProduct",props<{products:ProductType[]}>());
export const FailureProduct=createAction("[Product Component] FailureProduct",props<{error:any}>());