import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private httpClient:HttpClient) { }

  url = 'http://localhost:8080/api/products/'

  public getProducts():any{
    return this.httpClient.get(this.url);
  }

  public getProduct(id:any){
    return this.httpClient.get(this.url+id);
  }


  public createProduct(product:any){
    return this.httpClient.post(this.url,product);
  }

  public updateProduct(product:any,id:any){
    return this.httpClient.put(this.url+id,product);
  }

  public deleteProduct(id:any){
    return this.httpClient.delete(this.url+id);
  }
}
