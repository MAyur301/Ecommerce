import { Component } from '@angular/core';
import { CartserviceService } from '../service/cartservice.service';
import { product } from '../login/Modal/product.modal';

@Component({
  selector: 'app-myoder',
  templateUrl: './myoder.component.html',
  styleUrls: ['./myoder.component.css']
})
export class MyoderComponent {

  myorder!:product[]
  constructor(private cart:CartserviceService)
  {
        this.myorder = this.cart.product
  }


}

