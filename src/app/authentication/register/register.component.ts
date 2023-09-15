import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
registerForm:FormGroup = new FormGroup({
  FullName:new FormControl (' ',Validators.required),
  Email:new FormControl ('ex@example.com',[Validators.required,Validators.email]),
  Password:new FormControl ('********',[Validators.required,Validators.minLength(8)]),


})
}