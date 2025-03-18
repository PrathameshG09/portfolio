import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  messageForm:FormGroup=new FormGroup({
    name:new FormControl("",[
      Validators.required,
    ]),
    email:new FormControl("",[
      Validators.required,
      Validators.email
    ]),
    phone:new FormControl("",[
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
    ]),
    esub:new FormControl("",[]),
    yourMess:new FormControl("",[]),

  })

  submitForm(){

    console.log(this.messageForm.value);
    
  }

}
