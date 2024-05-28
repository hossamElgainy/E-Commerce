import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartsService } from '../../Services/carts.service';
import { ProductsService } from '../../../products/Services/products.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.css'
})
export class CartsComponent implements OnInit{
  carts: any[] = [];
  products: any[] = [];
  loading: boolean = false;

  details: any;
  form!: FormGroup;
  constructor(
    private cartService: CartsService,
    private productService: ProductsService,
    private builder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.form = this.builder.group({
      start: [''],
      end: [''],
    });
    this.getAllCarts();
  }

  getAllCarts() {
    let observer = {
      next: (carts: any[]) => {
        this.carts = carts;
        this.loading = false;

      },
      error: (err: Error) => {
        this.cartService.toasterError("Error Occured While Getting Carts");
        this.loading = false;

      },
    };
    this.cartService.getAllCart().subscribe(observer);
  }

  applyFilter() {
    let observer = {
      next: (carts: any[]) => {
        this.carts = carts;
        this.loading = false;

      },
      error: (err: Error) => {
        this.cartService.toasterError("Error Occured While Getting Carts");

        this.loading = false;

      },
    };
    this.cartService
      .getAllCartWithFilter(this.form.value.start, this.form.value.end)
      .subscribe(observer);
  }
  DeleteItem(id: number) {
    let observer = {
      next: (carts: any[]) => {
        this.getAllCarts(),
        this.cartService.toasterSuccess('Cart Deleted Successfullly');
      },
      error: (err: Error) => {
        this.cartService.toasterError("Error Occured While Deleting A Cart");

      },
    };
    this.cartService.deleteCart(id).subscribe(observer);
  }

  cartDetails(index: number) {
    this.details = this.carts[index];
    this.products = [];
    for (let product in this.details.products) {
      let observer = {
        next: (result: any) => {
          this.products.push({
            item: result,
            quantity: this.details.products[product].quantity,
          });
        },
        error: (err: Error) => {
          this.cartService.toasterError("Error Occured While Getting Cart Products");

        },
      };
      this.productService
        .getOneProducts(this.details.products[product].productId)
        .subscribe(observer);
    }
    //console.log(this.details);
  }
}
