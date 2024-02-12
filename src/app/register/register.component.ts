import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { register } from '../login/Modal/Register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  Data: register[] = [];
  constructor(private Route: Router) {}

  register!: FormGroup;

  ngOnInit(): void {
    this.register = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
  }
  Register(name: string, email: string, password: string) {
    this.Data.push({
      name,
      email,
      password,
    });
     localStorage.setItem('Data',JSON.stringify(this.Data))
     name="";
     email="",
     password="";

     alert("Login Sucess " + name)
  }


}
