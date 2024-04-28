import { Component, effect, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../redux/app.state';
import { AsyncPipe } from '@angular/common';
import { CounterStore } from '../../reduxStore/counter/counter.store';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
// count$:Observable<number>;
// constructor(private store:Store<AppState>){
//   this.count$=store.select(state=>state.counter.count);
// }
counter=inject(CounterStore);
constructor(){
  effect(()=>{
    console.log("count value change ho rhi hai: ",this.counter.count());
  })
}
}
