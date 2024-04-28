import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  constructor(private route: ActivatedRoute){
  }
  id = this.route.snapshot.paramMap.get('id');
  paramsList=this.route.params; 

ngOnInit(){
  console.log(this.id,"id mil rhi")
  console.log(this.paramsList)
}
}
