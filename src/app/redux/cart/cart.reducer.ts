import { createReducer, on } from "@ngrx/store";
import { ProductType } from "../../models/product.model";
import { addToCart, decrementProduct, incrementProduct } from "./cart.actions";

export interface CartState{
    products:ProductType[]
};
export const initialState:CartState={
    products:[]
};
export const cartReducer=createReducer(
    initialState,
   on(addToCart,(state,{product})=>{
    const updateProducts=[...state.products,product];
    return{
       ...state,
        products:updateProducts
    }
   }),
   on(incrementProduct,(state,{productId})=>{
    const updateProducts=state.products.map(product=>{
        if(product.id===productId){
            return{
               ...product,
                quantity:product.quantity+1
            }
        }else{
            return product
        }
    })
    return{
       ...state,
        products:updateProducts
    }
   }),
   on(decrementProduct,(state,{productId})=>{
    const updateProducts=state.products.map(product=>{
        if(product.id===productId){
            return{
               ...product,
                quantity:product.quantity-1
            }
        }else{
            return product
        }
    })
    return{
       ...state,
        products:updateProducts
    }
   })
)