import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductItemComponent } from './pages/product-item/product-item.component';

export const routes: Routes = [
    {
        path:"login",
        component:LoginComponent,
    },
    {
        path:'product',
        component:ProductComponent,
        children:[
            {
                path:'detail',
                component:ProductItemComponent
            },
            {
                path:'single-product/:id',
                component:ProductItemComponent
            }
        ]
    },
    
];
