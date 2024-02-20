import { Component, ElementRef, ViewChild } from '@angular/core';
import { AddtocartService } from '../service/addtocart.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
})
export class AddproductComponent {
  @ViewChild('productname') productname!: ElementRef;
  @ViewChild('productamount') amount!: ElementRef;
  @ViewChild('productdesc') productdesc!: ElementRef;
  @ViewChild('productcounter') counter!: ElementRef;

  pname = this.productname.nativeElement.value
  pamount =this.amount.nativeElement.value
  pdesc=this.productdesc.nativeElement.value;
  pcounter=this.counter.nativeElement.value;
  constructor(private addcart: AddtocartService) {}
  AddNewProduct() {



}
}
