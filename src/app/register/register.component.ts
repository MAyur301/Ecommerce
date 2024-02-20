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
  Data: register[] = [
    {
      name:'mayur',
      email:'mayur@123',
      password:'1234',
      Address:'vastral',
      role:'Admin',
    }
  ];

  constructor(private Route: Router) {}

  register!: FormGroup;

  ngOnInit(): void {
    this.register = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      Address: new FormControl(null)
    });
  }
  Register(name: string, email: string, password: string, Address:string,role:string) {
    this.Data.push({
      name,
      email,
      password,
      Address,
      role:"basicrole"
    });

     localStorage.setItem('Data',JSON.stringify(this.Data))
     name="";
     email="",
     password="";
     alert("Register is done");
     this.Route.navigate(['/login'])
  }


}
