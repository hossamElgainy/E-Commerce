import { Injectable, OnInit } from '@angular/core';
import { GenericECommerceApiServiceService } from '../../../../../../Services/generic-ecommerce-api-service.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedSubject:BehaviorSubject<boolean>;
  constructor(private genericApiService:GenericECommerceApiServiceService, private route: Router) {
    this.isLoggedSubject = new BehaviorSubject<boolean>(false);

   }

   AddNewUser(model:any):Observable<any>
   {
     return this.genericApiService.add("users", model);
   }
    CheckLoginCredentials(model:any):Observable<any>
   {
      return this.genericApiService.add("auth/login", model);   
   }
   get isUserLoggedIn(): boolean {
    return (localStorage.getItem('token')) ? true : false;
  }
  getLoggedStatus(){
    return this.isLoggedSubject.asObservable();
  }
}
