import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent {

  constructor(private Route:Router)
  {

  }
  Logout()
  {

       let r  =  confirm("Are you sure")
       if(r==true)
       {
        sessionStorage.removeItem('loggeduser');
        this.Route.navigate([""])
       }
       

  }

}
