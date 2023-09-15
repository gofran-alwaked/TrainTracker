import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;
  registerForm: FormGroup;

  constructor() {
    this.LoginForm = new FormGroup({
      Email: new FormControl('ex@example.com', [Validators.required, Validators.email]),
      Password: new FormControl('********', [Validators.required, Validators.minLength(8)])
    });

    this.registerForm = new FormGroup({
      FullName: new FormControl(' ', Validators.required),
      Email: new FormControl('ex@example.com', [Validators.required, Validators.email]),
      Password: new FormControl('********', [Validators.required, Validators.minLength(8)])
    });
  }

  ngOnInit() {
    const storedEmail = localStorage.getItem('name');
    const storedPassword = localStorage.getItem('Password');

    if (storedEmail && storedPassword) {
      this.LoginForm.setValue({
        Email: storedEmail,
        Password: storedPassword
      });
    }
  }

  loginSubmit() {
    console.log(this.LoginForm.value);
    localStorage.setItem('name', this.LoginForm.controls['Email'].value);
    localStorage.setItem('Password', this.LoginForm.controls['Password'].value);
  }

  RegisterSubmit() {
    console.log(this.registerForm.value);
    localStorage.setItem('name', this.registerForm.controls['Email'].value);
    localStorage.setItem('Password', this.registerForm.controls['Password'].value);
  }
}
