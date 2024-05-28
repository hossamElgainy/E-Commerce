import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../Services/category.service';
import { error } from 'console';
import { ProductsService } from '../../../products/Servcies/products.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  CatList: any[] = [];
  mensCloths: string = "men's clothing";
  womensCloths: string = "women's clothing"
  constructor(private catService: CategoryService) {

  }
  ngOnInit(): void {
    this.getAllCategories();
  }
  getAllCategories() {
    let observer = {
      next: (result: any) => {
        this.CatList = result;
      },
      error: (error: Error) => {
        this.catService.toasterError('Error Occud While Getting Categories :)');
      }
    };
    this.catService.getAllCats().subscribe(observer);
  }

}
