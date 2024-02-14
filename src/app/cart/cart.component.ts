import { Component, DoCheck, OnInit } from '@angular/core';
import { product } from '../login/Modal/product.modal';
import { CartserviceService } from '../service/cartservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
   cartdata:product[]=[];
   totalamount=0;
   constructor(private cart:CartserviceService,private route:Router)
   {
    this.cartdata = this.cart.product;
   }

  ngOnInit(): void {

         this.total();

  }


 onadd(item:{productname:string,amount:number,counter:number, productdesc:string})
 {
    //   this.cartdata.push(item);
      let index = this.cartdata.indexOf(item)
    //  this.counter++;
          item.counter++;
          this.total()

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
          this.total();
      }
      if(item.counter <=0)
      {
        this.cartdata.splice(index,1)
      }


 }
 total()
 {
  var total = 0;
  this.cartdata.forEach((x)=>{
  var value = x.amount * x.counter;
  total+=value
})
return total;

 }
 Buyproduct()
 {
    alert("Buy sucessFul");
    this.cartdata=[]
    this.cart.activatedEmitter.emit(true);
    this.route.navigate(['/dashboard/myorder'])

 }

}
