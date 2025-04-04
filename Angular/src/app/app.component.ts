import { Component } from '@angular/core';
import { ProductServiceService } from './product-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
