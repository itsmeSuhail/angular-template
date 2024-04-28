import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { fakeUrl } from '../../config/apiUrls';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [AsyncPipe,CommonModule,ProductCardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
http=inject(HttpClient);
products$=this.http.get(fakeUrl) as Observable<[]>;
ngOnInit(){
  this.products$.subscribe((data)=>{
    console.log(data);
  })
}
}
