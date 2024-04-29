import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
@Input()val:any;
callMe(){
  console.log();
}
ngOnChanges(changes: SimpleChanges): void {
  //ye sirf parent ke props pr call hota hai
  console.log("onchanges is called 2",changes)

}
ngOnInit(): void {
  //ye component render ke baad call hoga
  console.log("oninit is called 3")

}
constructor(){
  console.log("constructor is called 1")
}
ngDoCheck(){
  //ye hamesa call hoga jab bhi koi changes honge ya fir event fire hoga
  console.log("do check 4")
}
ngAfterContentInit(): void {
  //ye hamesa call hoga jab parent child pass karega
  //ng-content tag child mai use hoga
  console.log("after content init 5")
}
ngAfterContentChecked(): void {
  //ye jab call hoga jab parent ka child mil jaayega
  console.log("after content checked 6")
}
}
