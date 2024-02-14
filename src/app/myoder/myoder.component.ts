import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../service/cartservice.service';
import { product } from '../login/Modal/product.modal';

@Component({
  selector: 'app-myoder',
  templateUrl: './myoder.component.html',
  styleUrls: ['./myoder.component.css'],
})
export class MyoderComponent implements OnInit {

  myorder!: product[];
  Buynow:boolean = false;

  constructor(private cart: CartserviceService) {
        this.myorder = this.cart.product;
  }

  ngOnInit(): void {

    // this.cart.activatedEmitter.subscribe((buynow) => {
    // this.Buynow = buynow;
    // //console.log(this.Buynow);

    // });
    this.cart.data();
    this.Buynow = this.cart.Buynow
   // console.log(this.Buynow);

  }





}
