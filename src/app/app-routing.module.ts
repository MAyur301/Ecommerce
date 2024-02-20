import { CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyoderComponent } from './myoder/myoder.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { MydeatilsComponent } from './mydeatils/mydeatils.component';
import { authguard } from './myoder/guard/authguard.service';
import { loginauth } from './myoder/guard/loginauth.service';
import { AddproductComponent } from './addproduct/addproduct.component';


const routes: Routes = [{
  path:'',
  component:RegisterComponent,
  canActivate:[authguard]
},
{
   path:'login',
   component:LoginComponent,
   canActivate:[authguard],
},
{
  path:'dashboard',
  component:DashboardComponent,
  children:[
    {
      path:'Home',
      component:HomeComponent
    },
    {
      path:'About',
      component:AboutComponent
    },
    {
      path:'shop',
      component:ShopComponent
    },
    {
      path:'cart',
      component:CartComponent
    },
    {
      path:'anp',
      component:AddproductComponent
    },
    {
      path:'profile',
      component:MyprofileComponent,
      children:[
        {
          path:'wishlist',
          component:WishlistComponent,
        },
        {
          path:'mydeatils',
          component:MydeatilsComponent,
        },
        {
          path:'myorder',
          component:MyoderComponent
        }
      ]
    }

  ]
  ,canActivate:[loginauth],

},
{
  path:'**',
  component:PageNotFoundComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
