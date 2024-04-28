import { createReducer, on } from "@ngrx/store"
import { ProductType } from "../../models/product.model";
import { FailureProduct, SuccessProduct, loadProduct } from "./product.actions";

export interface productState{
    products:ProductType[];
    error:any;
    loading:boolean;
};
export const initialState:productState={
    products:[],
    error:null,
    loading:false
}
export const productReducer=createReducer(
    initialState,
    on(loadProduct,state=>({...state,loading:true})),
    on(SuccessProduct,(state,{products})=>({...state,products,loading:false,error:null})),
    on(FailureProduct,(state,{error})=>({...state,error,loading:false,products:[]}))
)