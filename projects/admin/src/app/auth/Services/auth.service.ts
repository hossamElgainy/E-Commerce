import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GenericECommerceApiServiceService } from '../../../../../../Services/generic-ecommerce-api-service.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedSubject:BehaviorSubject<boolean>;
  constructor(private genericApiService:GenericECommerceApiServiceService,private toastr: ToastrService) {
    this.isLoggedSubject = new BehaviorSubject<boolean>(false);

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
  toasterSuccess(message:string)
  {
    this.toastr.success(`${message}`, 'Success',{
      progressBar:true,
      closeButton:true
    });
  }
  toasterError(message:string)
  {
    this.toastr.error(`${message}`, 'Error',{
      progressBar:true,
      closeButton:true
    });
  }
}
