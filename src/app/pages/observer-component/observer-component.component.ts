import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, debounce, debounceTime, filter, map, shareReplay, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-observer-component',
  standalone: true,
  imports: [],
  templateUrl: './observer-component.component.html',
  styleUrl: './observer-component.component.css'
})
export class ObserverComponentComponent implements OnInit{
  obRef!:Subscription;
  ngOnInit(): void {
    //ye data ko emit krne ke kaam aata hai
    let pissza=new Observable((subscribe)=>{
      // console.log("observer")
      subscribe.next({user:"dev",age:12});
      subscribe.next({user:"soniya",age:18});
      subscribe.next({user:"rakul",age:21});
    });

    //ye data ko consume krne ke kaam ata hai

    // pissza.subscribe({
    //   next(data){
    //     console.log(data);
    //   },
    //   error(err){console.log(err.message,"check now")},
    //   complete(){
    //     console.log("completed");
    //   }
    // });

    //ye data ko filter krne ke kaam aata hai
    pissza.pipe(
      // debounceTime(1000),
      tap((data:any)=>{
        //ye data ko debug krne mai help krta hai yaha value change nhi hogi
      }),
      // switchMap((data:any)=>{
      //   return data;
      // }),
      map((data:any)=>{
  console.log(data,"pipe")
          return {...data,age:data.age+2};
      }),
      // filter((data:any)=>{
      //   return data.age>20;
      // })
      shareReplay()
    )
  this.obRef=  pissza.subscribe((val)=>{
      // console.log(val,"+++++");
    })
    pissza.subscribe((val)=>{
      // console.log(val,"______");
    })
    
  }
  ngOnDestroy(){
  this.obRef.unsubscribe();
}

}
