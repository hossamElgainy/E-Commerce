import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './Componants/category/category.component';
import { CatProductsComponent } from './Componants/cat-products/cat-products.component';
import { ProductsModule } from '../products/products.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../shared/Componants/not-found/not-found.component';



@NgModule({
  declarations: [
    CategoryComponent,
    CatProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsModule,
    RouterModule
  ]
})
export class CategoriesModule { }
