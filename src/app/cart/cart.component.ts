import { Component, OnInit } from '@angular/core';
import { product } from '../login/Modal/product.modal';
import { CartserviceService } from '../service/cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   cartdata:product[]=[]

   constructor(private cart:CartserviceService)
   {

   }
  ngOnInit(): void {
         this.cartdata = this.cart.product;
  }

 onadd(item:{productname:string,amount:number})
 {
       this.cartdata.push(item);
 }
 onminus(item:{productname:string,amount:number})
 {

         let index = this.cartdata.indexOf(item)
         console.log(index);

         this.cartdata.splice(index,1)

 }
}
