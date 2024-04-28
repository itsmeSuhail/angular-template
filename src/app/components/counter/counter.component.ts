import { Component, effect, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../redux/app.state';
import { selectCounter } from '../../redux/counter/counter.selector';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { decrement, increment, reset } from '../../redux/counter/counter.actions';
import { CounterStore } from '../../reduxStore/counter/counter.store';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  // count$: Observable<number>;
  count=signal(0);
  counterStore=inject(CounterStore);
  constructor(private store: Store<AppState>) {
    // this.count$ = store.select(selectCounter);
    effect(()=>{
    })
  }
  ngOnInit() {
    // console.log(this.count$, 'hell');
  }
  Increment(){
    // this.store.dispatch(increment());
    this.count.update(val=>val+1);
  }
  Decrement(){
    // this.store.dispatch(decrement());
    this.count.update(val=>val-1);

  }
  Reset(){
    // this.store.dispatch(reset());
  }
}
