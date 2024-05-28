import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/Componants/all-products/all-products.component';
import { ProductDetailsComponent } from './products/Componants/product-details/product-details.component';
import { CartsComponent } from './carts/Componants/carts/carts.component';
import { AuthComponent } from './auth/Componants/auth/auth.component';
import { LoginComponent } from './auth/Componants/login/login.component';
import { CategoryComponent } from './categories/Componants/category/category.component';
import { CatProductsComponent } from './categories/Componants/cat-products/cat-products.component';
import { NotFoundComponent } from './shared/Componants/not-found/not-found.component';
import { authGaurdGuard } from '../Gaurds/auth.guard';

const routes: Routes = [
  {path:"",redirectTo:"/Products",pathMatch:"full"},
  {path:"Category",component:CategoryComponent},
  {path:"Category/:cat",component:CatProductsComponent},
  {
    path: "Products",
    loadChildren: () => import('../app/products/products.module').then(m => m.ProductsModule)
  },
  {path:"Cart",component:CartsComponent,canActivate:[authGaurdGuard]},
  {
    path: "User",
    loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule)
  },

  {path:"**",component:NotFoundComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
