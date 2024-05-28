import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../../../../admin/src/app/viewModels/iproduct';
import { ProductsService } from '../../Servcies/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit {
  products: IProduct[] = [];
  categories: any[] = [];
  loading: boolean = false;
  cartProducts: any[] = [];
  constructor(private service: ProductsService) {

  }
  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCats();

  }

  getAllProducts() {
    this.loading = true;
    let observer ={
      next:(result: any) => {
        this.products = result;
        this.loading = false;
      }, 
      error:(error:any) => {
        this.service.toasterError("Error Occurd While Getting The Products")
        this.loading = false;
      }
    }
    this.service.getAllProducts().subscribe(observer);
  }
  getAllCats() {
    this.loading = true;
    let observer = {
      next:(result: any) => {
        this.categories = result;
        this.loading = false;
      },
       error :(error:Error)=> {
        this.service.toasterError("Error Occurd While Getting The Categories")

        this.loading = false;

      }
    }
    this.service.getAllCategories().subscribe(observer);
  }
  getCategoryProducts(category: string) {
    this.loading = true;
    let observer = {
      next:(result: any) => {
        this.products = result;
        this.loading = false;
      }, error:(error:any) => {
        this.service.toasterError("Error Occurd While Getting The Products")

        this.loading = false;
      }
    }
    this.service.filterProductsByCategory(category).subscribe(observer);
  }
  filterCategory(event: any) {
    let value = event.target.value;
    (value == "all") ? this.getAllProducts() : this.getCategoryProducts(value);
  }

  addToCart(event: any) {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
      let exist = this.cartProducts.find(item => item.item.id == event.item.id);
      if (exist) {
        this.service.toasterError("This item Is Already In The Card")
      }else{
        this.cartProducts.push(event);
        localStorage.setItem("cart", JSON.stringify(this.cartProducts));// JSON.stringify() send data as you recevied it 
        this.service.toasterSuccess("Product Added To The Card");

      }
      
    } else {
      this.cartProducts.push(event);
      localStorage.setItem("cart", JSON.stringify(this.cartProducts));// JSON.stringify() send data as you recevied it 
      this.service.toasterSuccess("Product Added To The Card");
    }

  }
}
