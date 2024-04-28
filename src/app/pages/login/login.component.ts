import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
login={
  email:'',
  password:''
}
constructor(private readonly userService:UserService,private readonly router:Router){}
submitNow(){
 this.userService.loginUser(this.login).subscribe(
  (res)=>{
    console.log(res);
    this.router.navigateByUrl('/dashboard');
  },
  (err)=>{
    this.router.navigateByUrl('/dashboard');

    console.log(err);
  }
); 
}
}