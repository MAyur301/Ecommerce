import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddtocartService } from '../service/addtocart.service';
import { product } from '../login/Modal/product.modal';
import { CartComponent } from '../cart/cart.component';
import { CartserviceService } from '../service/cartservice.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  productdata!: product[];
  deatils = false;
  deatil: product |null = null;
  constructor(
    private route: Router,
    private product: AddtocartService,
    private cart: CartserviceService
  ) {}

  ngOnInit(): void {
    this.productdata = this.product.productdata;
  }

  addtocart(item: {
    productname: string;
    amount: number;
    counter: number;
    productdesc: string;
  }) {
    //  alert("Add to cart");
    //  console.log(item);

    this.cart.product.push(item);
    console.log(this.cart.product);
  }
  viewdeatils(item: {
    productname: string;
    amount: number;
    counter: number;
    productdesc: string;
  }) {
    this.deatils = true;
    //  console.log(this.deatils);
 this.deatil=item



  }
}
