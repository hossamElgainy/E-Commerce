import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../viewModels/iproduct';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../Services/products.service';

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
  base64: any;
  form!: FormGroup;
  constructor(
    private service: ProductsService,
    private formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      id: [''],
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      category: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCats();
  }

  getAllProducts() {
    this.loading = true;
    let observer = {
      next: (result: any) => {
        this.products = result;
        this.loading = false;
      },
      error: (error: Error) => {
        this.service.toasterError("Error Occured While Getting Products");
        this.loading = false;
      }
    };


    this.service.getAllProducts().subscribe(observer);
  }
  getAllCats() {
    this.loading = true;
    let observer = {
      next: (result: any) => {
        this.categories = result;
        this.loading = false;
      },
      error: (error: Error) => {
        this.service.toasterError("Error Occured While Getting Categories");

        this.loading = false;
      }
    };


    this.service.getAllCategories().subscribe(observer);
  }
  /*getCategoryProducts(category: string) {
    this.loading = true;
    let observer = {

      next: (result: any) => {
        this.products = result;
        this.loading = false;
      },
      error: (error: Error) => {
        console.log(error);
        this.loading = false;
      }

    }
    this.service.filterProductsByCategory(category).subscribe(observer);

  }

  */
 /* filterCategory(event: any) {
    let value = event.target.value;
    value == 'all' ? this.getAllProducts() : this.getCategoryProducts(value);
  }
*/
  /*addToCart(event: any) {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      let exist = this.cartProducts.find(
        (item) => item.item.id == event.item.id
      );
      if (exist) {
        alert('This item Is Already In The Card');
      } else {
        this.cartProducts.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProducts)); // JSON.stringify() send data as you recevied it
      }
    } else {
      this.cartProducts.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts)); // JSON.stringify() send data as you recevied it
    }
  }
*/
  getImagePath(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result;
      this.form.get('image')?.setValue('dsgfjkgdg'); // for only test
    };
  }
  getSelectedCategory(event: any) {
    this.form.get('category')?.setValue(event.target.value);
  }
  addProduct() {
    var model = this.form.value;
    let observer = {
      next: (result: any) => {
        this.service.toasterSuccess('Product Added SuccessFully');
      },
      error: (err: Error) => {
        this.service.toasterError("Error Occured While Adding A Product");

      },
    };
    this.service.AddProduct(model).subscribe(observer);
  }
  UpdateProduct(data: any) {
    this.form.patchValue({
      id: data.id,
      title: data.title,
      price: data.price,
      description: data.description,
      image: data.image,
      category: data.category,
    });
    this.base64 = data.image;

    /* let model = this.form.value;
     let observer = {
       next: (result: any) => {
         console.log('Product Updated SuccessFully');
       },
       error: (err: Error) => {
         console.log(err.message);
       },
     };
     this.service.UpdateProduct(model).subscribe(observer);
     console.log(this.form);
     */
  }
}
