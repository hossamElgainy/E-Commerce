import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './Componants/all-products/all-products.component';
import { ProductComponent } from './Componants/product/product.component';
import { ProductDetailsComponent } from './Componants/product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { authGaurdGuard } from '../Gaurds/auth.guard';

const routes: Routes = [
  {path:"",redirectTo:"/Products/Product",pathMatch:"full"},
  {path:"Product",component:AllProductsComponent ,canActivate:[authGaurdGuard]},
  {path:"Product/:id",component:ProductDetailsComponent ,canActivate:[authGaurdGuard]},

];

@NgModule({
  declarations: [
    AllProductsComponent,
    ProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FontAwesomeModule
  ]
})
export class ProductsModule { }
