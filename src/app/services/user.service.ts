import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Subject } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class UserService{
    public refreshToken=new Subject<boolean>;
    private http=inject(HttpClient);
    constructor(){
      this.refreshToken.subscribe((res:any)=>{
        console.log(res,"hell me call me");
      });
    }
    loginUser(obj:any){
      return this.http.post("http://localhost:4200",obj);
    }
    getFakeData(){
      return this.http.get("https://jsonplaceholder.typicode.com/posts");
    }

}