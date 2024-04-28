import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductType } from '../../models/product.model';
import { AppState } from '../../redux/app.state';
import { Store } from '@ngrx/store';
import { selectProducts, selectQuantity, selectTotal } from '../../redux/cart/cart.selector';
import { AsyncPipe, CommonModule } from '@angular/common';
import { CartCardComponent } from '../../components/cart-card/cart-card.component';
import { incrementProduct } from '../../redux/cart/cart.actions';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [AsyncPipe,CartCardComponent,CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  products:Observable<ProductType[]>;
  totalPrice:Observable<number>;
  totalQunatity:Observable<number>;
  constructor(private store:Store<AppState>){
    this.products=store.select(selectProducts);
    this.totalPrice=store.select(selectTotal);
    this.totalQunatity=store.select(selectQuantity);
  }
  

}
