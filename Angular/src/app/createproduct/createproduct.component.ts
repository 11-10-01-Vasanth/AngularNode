import { Component } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-createproduct',
  standalone: false,
  templateUrl: './createproduct.component.html',
  styleUrl: './createproduct.component.css'
})
export class CreateproductComponent {

  constructor(private privateService: ProductServiceService){}

  newProduct:any = {};
  public createProduct():any{
    return this.privateService.createProduct(this.newProduct).subscribe(
      (res:any)=>{
        console.log(res);
        alert("Product created successfully...")
      },
      (err:any)=>{
        console.log(err);
      }
    )
  }
}
