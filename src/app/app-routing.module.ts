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

const routes: Routes = [{
  path:'',
  component:RegisterComponent
},
{
   path:'login',
   component:LoginComponent
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
      path:'myorder',
      component:MyoderComponent
    }
  ]

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
