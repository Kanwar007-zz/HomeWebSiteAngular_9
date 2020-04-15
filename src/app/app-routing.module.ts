import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { RegisterUserComponent } from './register-user/register-user.component';


const routes: Routes = [
  { path: '',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'contactUs',
    component: ContactUsComponent
  },
  {
    path:'product',
    component: ProductsComponent
  },
  
  { path: 'product-detail/:id', 
     component: ProductDetailsComponent },
  {
    path:'login',
    component: LoginComponent
  },
  {
     path:'register',
     component:RegisterUserComponent
  },
  {
    path:'**',
    component: NoPageFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
