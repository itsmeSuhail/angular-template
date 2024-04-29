import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {
  inputValue:string=""
  title:string="hell";
  onButtonClick(){

  }
}
