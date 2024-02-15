import { product } from './../login/Modal/product.modal';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddtocartService {

  constructor() {

   }

   productdata:product[]=[
    {
        productname:"productname1",
        amount:30,
        counter:0,
        productdesc:"This is Hair Dryer"

    },
    {
      productname:"productname2",
      amount:20,
      counter:0,
      productdesc:"This is Washing Machine"

  },
  {
    productname:"productname3",
    amount:20,
    counter:0,
    productdesc:"This is Phone"

  },
  {

      productname:"productname4",
      amount:20,
      counter:0,
      productdesc:"This is watercooler"

  }
]
getBranch()
{
 return new Observable<product[]>((sub) => {
   setTimeout(() => {
       sub.next(this.productdata)
   }, 1000)
})
}
}
