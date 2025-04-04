import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-component',
  standalone: false,
  templateUrl: './product-component.component.html',
  styleUrl: './product-component.component.css'
})
export class ProductComponentComponent implements OnInit  {
  constructor(private privateService: ProductServiceService){}

  allProducts:any;
  showAllproducts=false;
  ngOnInit(): void {
    console.log("Get All Products");

  }

  public getProducts():any{
    return this.privateService.getProducts().subscribe(
      (res:any)=>{
        this.allProducts = res;
        this.showAllproducts=true;
        console.log(res);
      },
      (err:any)=>{
        console.log(err);
      }
    )
  }

}
