import { Component, Input } from '@angular/core';
import { ProductType } from '../../models/product.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../redux/app.state';
import { decrementProduct, incrementProduct } from '../../redux/cart/cart.actions';

@Component({
  selector: 'app-cart-card',
  standalone: true,
  imports: [],
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.css'
})
export class CartCardComponent {
@Input()product!:ProductType;
constructor(private store:Store<AppState>){}
increaseProductQuantity(){
  this.store.dispatch(incrementProduct({productId:this.product.id}));
}
decreaseProductQuantity(){
  if(this.product.quantity>1){
    this.store.dispatch(decrementProduct({productId:this.product.id}));

  }
}
}
