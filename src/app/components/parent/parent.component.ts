import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../redux/app.state';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
count$:Observable<number>;
constructor(private store:Store<AppState>){
  this.count$=store.select(state=>state.counter.count);
}
}
