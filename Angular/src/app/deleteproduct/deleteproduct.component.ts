import { Component } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-deleteproduct',
  standalone: false,
  templateUrl: './deleteproduct.component.html',
  styleUrl: './deleteproduct.component.css'
})
export class DeleteproductComponent {
  constructor(private privateService: ProductServiceService){}

  deleteproductid:any
  public deleteProduct():any{
    return this.privateService.getProduct(this.deleteproductid).subscribe(
      (res:any)=>{
        console.log(res);
        alert("Product deleted...");
      },
      (err:any)=>{
        console.log(err);
      }
    )
  }

}
