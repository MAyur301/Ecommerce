import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { register } from './Modal/Register.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   loginData:[]=[]
  constructor(private route:Router)
  {

  }
  Login(email:string,password:string)
  {
         let Data = localStorage.getItem('Data')

         if(Data)
         {
            this.loginData=JSON.parse(Data)

         }

         let index = this.loginData.findIndex((ele : any) => {
          return ele.email === email && ele.password === password;
        });

        if(index == -1)
        {
          alert("Enter valid deatils")
        }
        else{
                 alert("Welcome");
                this.route.navigate(['dashboard'])
                sessionStorage.setItem('loggeduser',JSON.stringify(this.loginData[index]));

          }
}
}
