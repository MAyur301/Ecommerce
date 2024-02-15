import { Injectable } from '@angular/core';
import { product } from '../login/Modal/product.modal';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishlist:product[]=[]
  constructor() { }


}
