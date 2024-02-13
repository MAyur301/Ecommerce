import { Injectable } from '@angular/core';
import { product } from '../login/Modal/product.modal';

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
        counter:1,
        productdesc:"This is Hair Dryer"

    },
    {
      productname:"productname2",
      amount:25,
      counter:1,
      productdesc:"This is Washing Machine"

  },
  {
    productname:"productname3",
    amount:24,
    counter:1,
    productdesc:"This is Phone"

  },
  {

      productname:"productname4",
      amount:20,
      counter:1,
      productdesc:"This is watercooler"

  }
   ]

}
