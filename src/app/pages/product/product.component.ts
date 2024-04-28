import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { fakeUrl } from '../../config/apiUrls';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductApiService } from '../../services/product-api.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [AsyncPipe,CommonModule,ProductCardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
http=inject(HttpClient);
productApi=inject(ProductApiService);
products$=this.productApi.getProducts() as Observable<[]>;
ngOnInit(){
  this.productApi.getProducts().subscribe((data)=>{
    console.log(data);
  })
}
}
