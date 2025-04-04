import { Component } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-getsingleproduct',
  standalone: false,
  templateUrl: './getsingleproduct.component.html',
  styleUrl: './getsingleproduct.component.css'
})
export class GetsingleproductComponent {

  constructor(private privateService: ProductServiceService){}

  productid:any
  showProduct=false
  product:any = {}
  public getProduct():any{
    return this.privateService.getProduct(this.productid).subscribe(
      (res:any)=>{
        this.product = res;
        this.showProduct=true;
        console.log(res);
      },
      (err:any)=>{
        console.log(err);
      }
    )
  }
}
