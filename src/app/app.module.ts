import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyoderComponent } from './myoder/myoder.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MydeatilsComponent } from './mydeatils/mydeatils.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AddproductComponent } from './addproduct/addproduct.component';





@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    AboutComponent,
    CartComponent,
    ShopComponent,
    PageNotFoundComponent,
    MyoderComponent,
    MyprofileComponent,
    MydeatilsComponent,
    WishlistComponent,
    AddproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
