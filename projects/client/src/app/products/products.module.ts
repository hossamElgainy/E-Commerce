import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './Componants/product-details/product-details.component';
import { ProductComponent } from './Componants/product/product.component';
import { AllProductsComponent } from './Componants/all-products/all-products.component';
import { SharedModule } from '../../../../admin/src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotFoundComponent } from '../shared/Componants/not-found/not-found.component';


const routes: Routes = [
  {path:"",redirectTo:"/Products/Product",pathMatch:"full"},
  {path:"Product",component:AllProductsComponent},
  {path:"Product/:id",component:ProductDetailsComponent},
  {path:"**",component:NotFoundComponent},

];
@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductComponent,
    AllProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    RouterModule.forChild(routes)

  ],exports:[
    ProductComponent
  ]
})
export class ProductsModule { }
