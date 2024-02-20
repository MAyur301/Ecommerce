import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../service/cartservice.service';
import { product } from '../login/Modal/product.modal';
import { register } from '../login/Modal/Register.model';

@Component({
  selector: 'app-myoder',
  templateUrl: './myoder.component.html',
  styleUrls: ['./myoder.component.css'],
})
export class MyoderComponent implements OnInit {
  myorder!: product[];
  userdeatils!: register;
  Buynow: boolean = false;
  isempty = false;
  totalorder: number = 0;
  constructor(private cart: CartserviceService) {
    this.myorder = this.cart.product;
  }

  ngOnInit(): void {
    let data = localStorage.getItem('myorder');
    let data1 = sessionStorage.getItem('loggeduser');
    if (data) {
      console.log(data);
      let data3 = JSON.parse(data)
      console.log(data3);

      this.myorder=data3 ;
    }
    if (data1) {
      this.userdeatils = JSON.parse(data1);
    }
  }
  remove(item: product) {
    let index = this.myorder.indexOf(item);
    this.myorder.splice(index, 1);
    localStorage.setItem('myorder', JSON.stringify(this.myorder));
  }
}
