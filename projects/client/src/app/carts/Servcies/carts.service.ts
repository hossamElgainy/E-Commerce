import { Injectable } from '@angular/core';
import { GenericECommerceApiServiceService } from '../../../../../../Services/generic-ecommerce-api-service.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CartsService  {

  constructor(private service:GenericECommerceApiServiceService,private toastr: ToastrService) { }

  addCart(model:any):Observable<any>
  {
    return this.service.add("carts", model);
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

