import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../Servcies/products.service';
import { faStar, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  faUser = faUser;
  faStar = faStar;
  id!:any;
  data:any = {};
  constructor(private route:ActivatedRoute,private service:ProductsService)
  {
    this.id = this.route.snapshot.paramMap.get("id");
  }
  
  ngOnInit() {
    this.getOneProduct()
  }
  
  getOneProduct()
  {
    const observer = {
      next: (product:any) => {
        this.data= product;
      },
      error: (err: Error) => {   
        this.service.toasterError("Error Occurd While Getting The Product")
    }
    };
    this.service.getOneProducts(this.id).subscribe(observer);
  }
}
