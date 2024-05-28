import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../Servcies/carts.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.css'
})
export class CartsComponent implements OnInit{
  cartProducts:any[]=[];
  cartTotalPrice:number =0;
  success:boolean =false;
  constructor(private cartService:CartsService){}
  ngOnInit(): void {
   this.getCartProducts()
  }



  getCartProducts(){
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
    }
    this.getCartTotalPrice();
  }
  getCartTotalPrice(){
    this.cartTotalPrice =0;
    this.cartProducts.forEach(element => {
      this.cartTotalPrice+= element.item.price * element.quentity;
    });
  }
  incrementQuentity(index:number)
  {
    this.cartProducts[index].quentity++;
    this.getCartTotalPrice()
      localStorage.setItem("cart", JSON.stringify(this.cartProducts));    
  }
  decrementQuentity(index:number)
  {
    this.cartProducts[index].quentity--;
    this.getCartTotalPrice();
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));

  }
  detectAmountChange()
  {
    this.getCartTotalPrice();

    localStorage.setItem("cart", JSON.stringify(this.cartProducts));

  }
  DeleteProductFromCart(index:number)
  {
    this.cartProducts.splice(index,1);
    this.getCartTotalPrice();

    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
 
  }
  clearCart()
  {
    this.cartProducts=[];
    this.getCartTotalPrice();

    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }
  MadeOrder()
  {
    let products = this.cartProducts.map(item=>{
      return {productId:item.item.id,Quentity:item.quentity}
    })
    let Model={
      userId:5,
      date:new Date(),
      products :products
    }
    const observer = {
      next: (product:any) => {
        this.success =true;
        this.cartService.toasterSuccess('Your Order Saved Successfully');
      },
      error: (err: Error) => { 
        this.cartService.toasterError('Error Occured While Saving Your Order');
       }
    };
    this.cartService.addCart(Model).subscribe(observer);
  }
}
