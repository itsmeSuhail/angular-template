import { Component, Input } from '@angular/core';
import { ProductType } from '../../models/product.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../redux/app.state';
import { addToCart, removeProduct } from '../../redux/cart/cart.actions';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
@Input()product!:ProductType;
constructor(private store:Store<AppState>){}
ngOnInit(){
  // this.store.select((store: AppState) => store.cart)
  // .subscribe({
  //   next: (data) => {
  //     console.log(data, "hello");
  //   },
  //   error: (err) => {
  //     console.error("Error occurred:", err);
  //   },
  //   complete: () => {
  //     console.log("Subscription completed.");
  //   }
  // });

}
AddProduct(){
  this.store.dispatch(addToCart({product:this.product}));
}
RemoveProduct(){
  this.store.dispatch(removeProduct({productId:this.product.id}));
}
}
