import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faMoneyBillAlt, faShoppingCart, faStar, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  faMoney = faMoneyBillAlt;
  faUser =faUser;
  faCard = faShoppingCart
  faStar = faStar;
  @Input() data: any = {};
  @Output() item = new EventEmitter();
  addProduct: boolean = false;
  amount: number = 0;
  add() {
    this.item.emit({ item: this.data, quentity: this.amount });
  }
}
