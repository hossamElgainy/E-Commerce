import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericECommerceApiServiceService } from '../../../../../../Services/generic-ecommerce-api-service.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private service:GenericECommerceApiServiceService,private toastr: ToastrService) { }

  addCart(model:any):Observable<any>
  {
    return this.service.add("carts", model);
  }
  getAllCart():Observable<any[]>
  {
    return this.service.getAll("carts");
  }
  getAllCartWithFilter(startDate:any,endDate:any):Observable<any[]>
  {
    return this.service.getAllWithFilter(`carts?startdate=${startDate}&enddate=${endDate}`);
  }
  deleteCart(id:number)
  {
    return this.service.delete(`carts`,id);
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
