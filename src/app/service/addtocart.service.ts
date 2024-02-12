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
        amount:30

    },
    {
      productname:"productname2",
      amount:25

  },
  {
    productname:"productname3",
    amount:24

  },
  {

      productname:"productname4",
      amount:20

  }
   ]

}
