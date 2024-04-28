import { Injectable, inject } from "@angular/core";
import { ProductApiService } from "../../services/product-api.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { FailureProduct, SuccessProduct, loadProduct } from "./product.actions";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class ProductEffect{
  private api=inject(ProductApiService);
  actions=inject(Actions);
  loadProducts=createEffect(()=>
  this.actions.pipe(
    ofType(loadProduct),
    switchMap(()=>
    this.api.getProducts().pipe(
        map(products=>{
            let productAdded=products.map((item)=>({...item,quantity:1}));
            return SuccessProduct({products:productAdded});
        }),
        catchError((error:any)=>of(FailureProduct({error})))
    )
    )
  )
  )
}