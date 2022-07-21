import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListOfProductsComponent } from './list-of-products/list-of-products.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  { 
    path: 'list-of-products', 
    component: ListOfProductsComponent
  },
  { path : 'product-details/:id', 
    component: ProductDetailsComponent 
  },
  {
    path: '',
    redirectTo: '/login', 
    pathMatch: 'full'
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent
  },
  {
    path: 'edit-product/:id',
    component: EditProductComponent
  },
  {
    path: 'add-new-product',
    component: AddNewProductComponent
  },
  {
    path: 'login',
    component: LoginViewComponent
  }
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes), 
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
