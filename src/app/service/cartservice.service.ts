import { product } from './../login/Modal/product.modal';
import { EventEmitter, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartserviceService {
  product: product[] = [];
  Buynow: boolean = false;

  activatedEmitter = new EventEmitter<boolean>();
  constructor() {}

  data() {
    this.activatedEmitter.subscribe((e) => {
      this.Buynow = true;
      //console.log(this.Buynow);
    });
  }
  clearData(){
    this.product=[]
  }
}
