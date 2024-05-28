import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericECommerceApiServiceService } from '../../../../../../Services/generic-ecommerce-api-service.service';
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
  AddProduct(model:any):Observable<any>{

    return this.genericApiService.add('products',model);
  }
  UpdateProduct(model:any):Observable<any>{

    return this.genericApiService.add(`products/${model.id}`,model);
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
