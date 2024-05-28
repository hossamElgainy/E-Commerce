import { Injectable } from '@angular/core';
import { GenericECommerceApiServiceService } from '../../../../../../Services/generic-ecommerce-api-service.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private service:GenericECommerceApiServiceService,private toastr: ToastrService) { }

  getAllCats(){

    return this.service.getAll("products/categories");
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
