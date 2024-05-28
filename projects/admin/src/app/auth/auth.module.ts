import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Componants/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../shared/Componants/not-found/not-found.component';

const routes: Routes = [
  {path:"",redirectTo:"/Admin/SignIn",pathMatch:"full"},
  {path:"SignIn",component:LoginComponent},
  {path:"**",component:NotFoundComponent},
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
