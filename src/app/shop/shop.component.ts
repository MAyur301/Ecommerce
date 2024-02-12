import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
constructor(private route:Router){

}
  addtocard()
  {
    alert("ADD TO Cart")
    this.route.navigate(['cart'])

  }
}


