import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Componants/header/header.component';
import { SelectComponent } from './Componants/select/select.component';
import { SpinnerComponent } from './Componants/spinner/spinner.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './Componants/not-found/not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    HeaderComponent,
    SelectComponent,
    SpinnerComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule

  ],
  exports:[
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SharedModule { }
