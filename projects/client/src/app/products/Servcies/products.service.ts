import { Injectable } from '@angular/core';
import { GenericECommerceApiServiceService } from '../../../../../../Services/generic-ecommerce-api-service.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  product:any ={};
  constructor(private genericApiService:GenericECommerceApiServiceService,private toastr: ToastrService){}

  getAllProducts(){
    return this.genericApiService.getAll('products');
  }

  getOneProducts(id:any):Observable<any>{

    return this.genericApiService.getOne('products',id);
  }

  getAllCategories(){
    return this.genericApiService.getAll('products/categories');
  }
  filterProductsByCategory(category:string)
  {
    return this.genericApiService.getAll(`products/category/${category}`)
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
