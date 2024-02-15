import { Component } from '@angular/core';
import { register } from '../login/Modal/Register.model';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mydeatils',
  templateUrl: './mydeatils.component.html',
  styleUrls: ['./mydeatils.component.css']
})
 export class MydeatilsComponent {
     name!:string;
     email!:string;
     mydeatils!:register;
     updatevalue=false;
     constructor()
     {
        let data = sessionStorage.getItem('loggeduser')
        if (data) {
          this.mydeatils = JSON.parse(data);
         /// console.log(this.mydeatils);
        }
        this.name=this.mydeatils.name;
        this.email=this.mydeatils.email;

     }

  edit()
  {
     this.updatevalue=true;

  }
  update(name:string,email:string)
  {
    //  this.name=name;
     // this.email=email;
  }

  address()
  {

  }
}
