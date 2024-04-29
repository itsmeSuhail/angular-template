import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child3',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './child3.component.html',
  styleUrl: './child3.component.css'
})
export class Child3Component {
  inputValue:string=""
  title:string="hell";
  onButtonClick(){

  }
}
