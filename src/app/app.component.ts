import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ObserverComponentComponent } from './pages/observer-component/observer-component.component';
import { fromEvent } from 'rxjs';
import { SubjectComponentComponent } from './pages/subject-component/subject-component.component';
import { NotificationService } from './services/notification.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,ObserverComponentComponent,SubjectComponentComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reduxproject';
  @ViewChild('search') input!: ElementRef;
  subjectRef:boolean=false;
  constructor(private notifyService:NotificationService){}
  ngOnInit(){
    this.notifyService.notify.subscribe((res:boolean)=>{
      console.log("value is: ",res)
      this.subjectRef=res;
    })
  }
  ngAfterViewInit(): void {
    // fromEvent(this.input.nativeElement,"input").subscribe((res)=>{
    //   console.log(res,"hello")
    // })
    // console.log(this.input.nativeElement.value,"hell")
}

}
