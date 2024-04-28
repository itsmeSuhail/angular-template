import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from './redux/app.state';
import { Observable } from 'rxjs';
import { selectQuantity } from './redux/cart/cart.selector';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink,AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reduxproject';
  totalQuantity:Observable<number>;
  constructor(private store:Store<AppState>){
    this.totalQuantity=store.select(selectQuantity);
  }
 
}
