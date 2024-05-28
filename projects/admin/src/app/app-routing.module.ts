import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartsComponent } from './carts/Componants/carts/carts.component';
import { NotFoundComponent } from './shared/Componants/not-found/not-found.component';
import { authGaurdGuard } from '../../../client/src/Gaurds/auth.guard';

const routes: Routes = [
  {path:"",redirectTo:"/Admin",pathMatch:"full"},
  {path:"",component:NotFoundComponent},

  {
    path: "Products",
    loadChildren: () => import('../app/products/products.module').then(m => m.ProductsModule)
  },
  {path:"Cart",component:CartsComponent,canActivate:[authGaurdGuard]},
  {
    path: "Admin",
    loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule)
  },
  {path:"**",component:NotFoundComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
