import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ProductType } from '../models/product.model';
import { fakeUrl } from '../config/apiUrls';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
http=inject(HttpClient);
  constructor() { }
  getProducts(){
    return this.http.get<ProductType[]>(`${fakeUrl}`).pipe(
      map((products:ProductType[])=>{
        return products.map(product=>{
          return{
           ...product,
            quantity:1
          }
        })
      })
    );
  }
}
