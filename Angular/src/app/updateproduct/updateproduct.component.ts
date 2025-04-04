import { Component } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-updateproduct',
  standalone: false,
  templateUrl: './updateproduct.component.html',
  styleUrl: './updateproduct.component.css'
})
export class UpdateproductComponent {
  constructor(private privateService: ProductServiceService){}

  updatedProduct:any = {};
  updatedProductId:any;
  public updateProduct():any{
    return this.privateService.updateProduct(this.updatedProduct,this.updatedProductId).subscribe(
      (res:any)=>{
        alert(res.message)
        console.log(res.message);

      },
      (err:any)=>{
        console.log(err);
      }
    )
  }
}
