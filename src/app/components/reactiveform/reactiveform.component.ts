import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FomatPipe } from '../../pipes/fomat.pipe';

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [FormsModule,CommonModule,FomatPipe,ReactiveFormsModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {
  userForm:FormGroup;
  constructor(private formBuilder:FormBuilder){
    this.userForm=this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      address:this.formBuilder.group({
        street:['',Validators.required],
        city:['',Validators.required],
      }),
      phoneNumber:this.formBuilder.array([
        this.formBuilder.control('',[
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('^[0-9]*$')
        ]),
      ])
    })
  }
  get phoneNumbers(){
    return this.userForm.get('phoneNumber') as FormArray;
  }
  addPhone(){
    this.phoneNumbers.push(this.formBuilder.control('',[
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern('^[0-9]*$')
    ]));
  }
  removePhone(index:number){
    this.phoneNumbers.removeAt(index);
  }
  onSubmit(){
    console.log("first")
    if(this.userForm.valid){
      console.log(this.userForm.value);
    }
  }
}
