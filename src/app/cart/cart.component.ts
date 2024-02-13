import { Component, OnInit } from '@angular/core';
import { product } from '../login/Modal/product.modal';
import { CartserviceService } from '../service/cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   cartdata:product[]=[];
   totalamount=0
   constructor(private cart:CartserviceService)
   {

   }
  ngOnInit(): void {
         this.cartdata = this.cart.product;
  }

 onadd(item:{productname:string,amount:number,counter:number, productdesc:string})
 {
    //   this.cartdata.push(item);
    let index = this.cartdata.indexOf(item)
    //  this.counter++;
     console.log(index);
     if(index == -1)
     {
       console.log("fail to add product");

     }
     else
     {
          item.counter++;
     }

 }
 onminus(item:{productname:string,amount:number,counter:number, productdesc:string})
 {

         let index = this.cartdata.indexOf(item)
        //  console.log(index);

      if(index == -1)
      {
         console.log("Fail to minus");

      }
      else
      {
          item.counter--;
      }

      if(item.counter <= 0)
      {
          this.cartdata.splice(index,1);

      }

 }

 total(item:{productname:string,amount:number,counter:number, productdesc:string})
 {



 }

}
