import { computed } from "@angular/core";
import {signalStore,withState,patchState,withMethods,withComputed} from "@ngrx/signals"
export interface counterState{
    count:number;
}
export const initailState:counterState={
    count:1
}
export const CounterStore=signalStore(
    { providedIn: 'root' },
    withState(initailState),
    withComputed(({count})=>({
   doubleCount:computed(()=>count()*2)
    })),
    withMethods(({count,...store})=>({
        increment:()=>patchState(store,{count:count()+1}),
        decrement:()=>patchState(store,{count:count()-1}),
        reset:()=>patchState(store,{count:0})
    }))
)