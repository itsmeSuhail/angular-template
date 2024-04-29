import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { NotificationService } from '../../services/notification.service';
import { Child1Component } from '../../components/child1/child1.component';
import { Child2Component } from '../../components/child2/child2.component';
import { Child3Component } from '../../components/child3/child3.component';

@Component({
  selector: 'app-subject-component',
  standalone: true,
  imports: [Child1Component,Child2Component,Child3Component],
  templateUrl: './subject-component.component.html',
  styleUrl: './subject-component.component.css'
})
export class SubjectComponentComponent {
 constructor(private notifyService:NotificationService){}
 ngOnInit(): void {
  setTimeout(() => {
    this.notifyService.notify.next(true);
  });
  // this.subjectRef=new Subject<number>();
  // this.subjectRef.subscribe((val)=>{
  //   console.log(val,"0+++subject")
  // });
  // this.subjectRef.subscribe((val)=>{
  //   console.log(val,"0---subject")
  // });
  // this.subjectRef.next(1);
  // this.subjectRef.next(112);

  
 }
 ngOnDestroy(): void {
  this.notifyService.notify.next(false);
 }
}
