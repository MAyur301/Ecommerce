import { Component, OnInit } from '@angular/core';
import { register } from '../login/Modal/Register.model';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mydeatils',
  templateUrl: './mydeatils.component.html',
  styleUrls: ['./mydeatils.component.css']
})
 export class MydeatilsComponent implements OnInit{
     name!:string;
     email!:string;
     Address!:string;
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
        this.Address=this.mydeatils.Address;
     }
     ngOnInit(): void {

     }

  edit()
  {
     this.updatevalue=true;

  }
  update(name:string,email:string)
  {
     this.name=name;
     this.email=email;
     this.updatevalue=false;

  }

  address()
  {

  }

}
