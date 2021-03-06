import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from './components/body/body.component';
import {CartCounterDetailsComponent} from './components/cart-counter-details/cart-counter-details.component';
import {WishListCounterDetailsComponent} from './components/wish-list-counter-details/wish-list-counter-details.component';
import {RegisterformComponent} from './components/registerform/registerform.component';
import {LoginformComponent } from './components/loginform/loginform.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {SingleProductDetailsComponent} from './components/single-product-details/single-product-details.component';
import { from } from 'rxjs';
const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{path:'home' ,component:BodyComponent},
{path:'cartlist' , component:CartCounterDetailsComponent},
{path:'wishlist' , component:WishListCounterDetailsComponent},
{path: 'registerForm',component:RegisterformComponent},
{path:'loginForm' ,component:LoginformComponent },
{path:'productdetails/:id' ,component:SingleProductDetailsComponent},
{path:'**' , component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
