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
  update_Product:any = {};
  showUpdateProduct = false;
  public updateProduct():any{
    return this.privateService.updateProduct(this.updatedProduct,this.updatedProductId).subscribe(
      (res:any)=>{
        this.update_Product = res;
        this.showUpdateProduct=true;
        console.log(res);
      },
      (err:any)=>{
        console.log(err);
      }
    )
  }
}
