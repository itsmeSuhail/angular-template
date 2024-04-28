import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private userService:UserService) { 

  }
  getAllUser(){
    this.userService.getFakeData().subscribe(
      (res)=>{
        console.log(res,"hell data");
      },
      (err)=>{
        console.log(err);
      }
    );
  }
  ngOnInit(){
    this.getAllUser();
  }
}
