import { Component, DoCheck, OnInit } from '@angular/core';
import { product } from '../login/Modal/product.modal';
import { CartserviceService } from '../service/cartservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartdata: product[] = [];
  myorder: any[] = [];
  totalamount = 0;
  buynow = 0;

  constructor(private cart: CartserviceService, private route: Router) {}

  ngOnInit(): void {
    this.cartdata = this.cart.product;
    console.log(this.cartdata);
    this.total();
  }

  onadd(item: {
    productname: string;
    amount: number;
    counter: number;
    productdesc: string;
  }) {
    //   this.cartdata.push(item);
    let index = this.cartdata.indexOf(item);
    //  this.counter++;
    item.counter++;
    this.total();
  }
  onminus(item: {
    productname: string;
    amount: number;
    counter: number;
    productdesc: string;
  }) {
    let index = this.cartdata.indexOf(item);
    //  console.log(index);

    if (index == -1) {
      console.log('Fail to minus');
    } else {
      item.counter--;
      this.total();
    }
    if (item.counter <= 0) {
      this.cartdata.splice(index, 1);
    }
  }
  total() {
    this.totalamount = 0;
    this.cartdata.forEach((x) => {
      var value = x.amount * x.counter;
      this.totalamount += value;
    });
    return this.totalamount;
  }
  Buyproduct() {
    if (this.totalamount == 0) {
      alert('Plz add the deatils');
    } else {
      alert('Buy sucessFul');
      this.cart.product=[];
      console.log(this.cartdata);

      this.cartdata.forEach((e) => {
        this.myorder.push(e);
      });
      this.route.navigate(['/dashboard/profile/myorder'])

      console.log("cart ",this.cartdata);

      console.log("order",this.myorder);
      let my =localStorage.getItem('myorder');
      // if(my){
      //   console.log(my==='');

        localStorage.setItem('myorder', JSON.stringify(this.myorder));
      // }


      this.cart.activatedEmitter.emit(true);
      this.buynow++;
    }
  }
}
