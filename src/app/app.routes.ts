import { Routes } from '@angular/router';

export const routes: Routes = [
    /**
     {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  }
     */
    {
        path:'',
        loadComponent:()=>import("./pages/product/product.component").then((component)=>component.ProductComponent)
    },
    {
        path:'counter',
        loadComponent:()=>import("./components/counter/counter.component").then((component)=>component.CounterComponent)
    },
    {
        path:'cart',
        loadComponent:()=>import("./pages/cart/cart.component").then((component)=>component.CartComponent)
    }
];
