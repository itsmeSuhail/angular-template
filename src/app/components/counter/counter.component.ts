import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../redux/app.state';
import { selectCounter } from '../../redux/counter/counter.selector';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { decrement, increment, reset } from '../../redux/counter/counter.actions';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe,ParentComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  count$: Observable<number>;
  constructor(private store: Store<AppState>) {
    this.count$ = store.select(selectCounter);
  }
  ngOnInit() {
    console.log(this.count$, 'hell');
  }
  Increment(){
    this.store.dispatch(increment());
  }
  Decrement(){
    this.store.dispatch(decrement());
  }
  Reset(){
    this.store.dispatch(reset());
  }
}
