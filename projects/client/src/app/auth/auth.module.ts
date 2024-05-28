import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './Componants/auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Componants/login/login.component';
import { NotFoundComponent } from '../shared/Componants/not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",redirectTo:"/User/SignIn",pathMatch:"full"},

  {path:"SignUp",component:AuthComponent},
  {path:"SignIn",component:LoginComponent},
  {path:"**",component:NotFoundComponent},

];

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class AuthModule { }
