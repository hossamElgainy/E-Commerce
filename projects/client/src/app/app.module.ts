import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartsModule } from './carts/carts.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from "./shared/shared.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoriesModule } from './categories/categories.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
    declarations: [
        AppComponent
        
    ],
    providers: [
        provideClientHydration()
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ProductsModule,
        FormsModule,
        CartsModule,
        AuthModule,
        SharedModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        CategoriesModule,
        BrowserAnimationsModule, // required animations module
        ToastrModule.forRoot(),
        ]
})
export class AppModule { }
