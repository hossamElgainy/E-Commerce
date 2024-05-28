import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../products/Servcies/products.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cat-products',
  templateUrl: './cat-products.component.html',
  styleUrl: './cat-products.component.css'
})
export class CatProductsComponent implements OnInit{
  products:any[] = [];

  category!:any;
constructor(private route:ActivatedRoute,private productService:ProductsService)
{
  this.category = this.route.snapshot.paramMap.get("cat");
}
ngOnInit(): void {
  this.getCategoryProducts()
}
getCategoryProducts() {
  //this.loading = true;
  let observer ={
    next:(result:any) =>{
      this.products =result;

    },
    error:(error:Error)=>{
      this.productService.toasterError('Error Occurd While Getting The Products');
    }
  };
  this.productService.filterProductsByCategory(this.category).subscribe(observer);
}
}
