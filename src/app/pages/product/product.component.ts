import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { fakeUrl } from '../../config/apiUrls';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductApiService } from '../../services/product-api.service';
import { ProductType } from '../../models/product.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../redux/app.state';
import { SuccessProduct, loadProduct } from '../../redux/product/product.actions';
import { selectAllProducts } from '../../redux/product/product.selector';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [AsyncPipe,CommonModule,ProductCardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
// http=inject(HttpClient);
// productApi=inject(ProductApiService);
// products$=this.productApi.getProducts() as Observable<[]>;
ngOnInit(){
  // this.productApi.getProducts().subscribe((data)=>{
  //   console.log(data);
  // })
}
products$:Observable<ProductType[]>;
constructor(private store:Store<AppState>){
  this.store.dispatch(loadProduct());
  this.products$=this.store.select(selectAllProducts);
}
}
