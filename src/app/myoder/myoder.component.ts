import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../service/cartservice.service';
import { product } from '../login/Modal/product.modal';

@Component({
  selector: 'app-myoder',
  templateUrl: './myoder.component.html',
  styleUrls: ['./myoder.component.css'],
})
export class MyoderComponent implements OnInit {

  myorder!: product[];
  Buynow:boolean = false;
  isempty=false;
  constructor(private cart: CartserviceService) {
        this.myorder = this.cart.product;
  }

  ngOnInit(): void {


     let data = localStorage.getItem('myorder')
     if(data)
     {
      console.log(data);
      this.myorder = JSON.parse(data);
     }
     console.log(this.myorder);

  }

  remove(item:product)
  {
    let index = this.myorder.indexOf(item)
    this.myorder.splice(index,1)
    localStorage.setItem('myorder',JSON.stringify(this.myorder))

   

  }



}
