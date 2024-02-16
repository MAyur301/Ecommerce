import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddtocartService } from '../service/addtocart.service';
import { product } from '../login/Modal/product.modal';
import { CartComponent } from '../cart/cart.component';
import { CartserviceService } from '../service/cartservice.service';
import { WishlistService } from '../service/wishlist.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit, DoCheck {
  productdata!: product[];
  deatils = false;
  deatil: product | null = null;
  serch!: string;
  temp!: product;
  high!:product[];
  low!:product[];
  normal=true;
  highp=true;
  lowp=true;
  constructor(
    private route: Router,
    private product: AddtocartService,
    private cart: CartserviceService,
    private wish: WishlistService
  ) {

  }

  ngOnInit(): void {
    this.productdata = this.product.productdata;
  }
  ngDoCheck(): void {
    this.getserchproduct();
  }

  addtocart(item: {
    productname: string;
    amount: number;
    counter: number;
    productdesc: string;
  }) {
    //  alert("Add to cart");
    //  console.log(item);

    if (item.counter == 0) {
      this.cart.product.push(item);
      item.counter++;
    } else {
      item.counter++;
    }
  }
  viewdeatils(item: {
    productname: string;
    amount: number;
    counter: number;
    productdesc: string;
  }) {
    this.deatils = true;
    //  console.log(this.deatils);
    this.deatil = item;
  }

  addtowishlist(item: product) {
    let r = confirm('Are youn sure to Add in wishlist');
    if (r == true) {
      this.wish.wishlist.push(item);
      alert('Add to wilish');
      localStorage.setItem('wishlist', JSON.stringify(this.wish.wishlist));
      //  this.route.navigate(['/dashboard/profile/wishlist'])
    }
  }
  highprice() {
    this.normal=false;
    this.lowp=false;
    this.highp=true;
    for (let i = 0; i < this.productdata.length; i++) {
      for (let j = 0; j < i; j++) {
        if (this.productdata[i].amount > this.productdata[j].amount) {
          this.temp = this.productdata[i];
          this.productdata[i] = this.productdata[j];
          this.productdata[j] = this.temp;
        }
      }
    }
    this.high = this.productdata
  }
  lowtohigh()
  {
    this.normal=false;
    this.highp=false;
    this.lowp=true;
    for (let i = 0; i < this.productdata.length; i++) {
      for (let j = 0; j < i; j++) {
        if (this.productdata[i].amount < this.productdata[j].amount) {
          this.temp = this.productdata[i];
          this.productdata[i] = this.productdata[j];
          this.productdata[j] = this.temp;
        }
      }
    }

  this.low=    this.productdata ;

  }

  getserchproduct() {
    this.product
      .getBranch()
      .pipe(
        map((val) => {
          return val.filter((brn) => {
            if (this.serch) {
              return brn.productname === this.serch;
            } else {
              return brn;
            }
          });
        })
      )
      .subscribe((res) => {
        this.productdata = res;
      });
  }



}
