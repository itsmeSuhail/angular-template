import { createReducer, on } from "@ngrx/store";
import { ProductType } from "../../models/product.model";
import { addToCart, decrementProduct, incrementProduct, removeProduct } from "./cart.actions";

export interface CartState{
    products:ProductType[],
    totalPrice:number,
    totalQuantity:number
};
export const initialState:CartState={
    products:[],
    totalPrice:0,
    totalQuantity:0
};
export const cartReducer=createReducer(
    initialState,
   on(addToCart,(state,{product})=>{
    const updateProducts=[...state.products,product];
    const totalPrice=updateProducts.reduce((acc,product)=>acc+product.price*product.quantity,0);

    return{
       ...state,
        products:updateProducts,
        totalPrice:totalPrice,
        totalQuantity:updateProducts.length,
    }
   }),
   on(incrementProduct,(state,{productId})=>{
    let price=0;
    const updateProducts=state.products.map(product=>{
        if(product.id===productId){
            price=product.price;
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
        products:updateProducts,
        totalPrice:state.totalPrice+price,
        totalQuantity:updateProducts.length,
    }
   }),
   on(decrementProduct,(state,{productId})=>{
    let price=0;
    const updateProducts=state.products.map(product=>{
        if(product.id===productId){
            price=product.price;
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
        products:updateProducts,
        totalPrice:state.totalPrice-price,
        totalQuantity:updateProducts.length,
    }
   }),
   on(removeProduct,(state,{productId})=>{
    const updateProducts=state.products.filter(product=>product.id!==productId);
    const totalPrice=updateProducts.reduce((acc,product)=>acc+product.price*product.quantity,0);
    return{
       ...state,
        products:updateProducts,
        totalPrice:totalPrice,
        totalQuantity:updateProducts.length
    }
   })
)