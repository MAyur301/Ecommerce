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
export class ShopComponent implements OnInit,DoCheck {
  productdata!: product[];
  deatils = false;
  deatil: product | null = null;
  serch!:string;
  constructor(
    private route: Router,
    private product: AddtocartService,
    private cart: CartserviceService,
    private wish: WishlistService
  ) {

    console.log(this.serch);

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

    let r = confirm("Are youn sure to Add in wishlist")
    if(r == true)
    {
      this.wish.wishlist.push(item);
      alert("Add to wilish");
      localStorage.setItem('wishlist',JSON.stringify(this.productdata))
      this.route.navigate(['/dashboard/profile/wishlist'])
    }


  }

  getserchproduct()
  {
    this.product.getBranch().pipe(
      map((val) => {
        return val.filter((brn) => {
          if (this.serch) {
            return brn.productname === this.serch;
          } else {
            return brn;
          }
        })
      })
    ).subscribe(res =>
      {
        this.productdata = res;
      })
  }
}
