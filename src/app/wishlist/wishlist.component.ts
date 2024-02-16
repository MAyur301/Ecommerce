import { Component } from '@angular/core';
import { WishlistService } from '../service/wishlist.service';
import { product } from '../login/Modal/product.modal';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  product:product[]=[]
  constructor(private wish:WishlistService)
  {

        let data  =  localStorage.getItem('wishlist')
        if(data)
        {
            this.product = JSON.parse(data);
        }
  }

 remove(item:product)
 {
  let index = this.product.indexOf(item)
  this.product.splice(index,1)
  localStorage.setItem('wishlist',JSON.stringify(this.product))
 }
}

