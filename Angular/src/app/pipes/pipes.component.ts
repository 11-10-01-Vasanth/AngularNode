import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: false,
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  myobject = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
  }

  mydate:Date = new Date();

  mymoney = 1000;

  myarray = [1,2,3,4,5]

  promiseData:any

  constructor() {
    // this.getPromiseDate()
    // .then((success) => {
    //   this.promiseData = success
    // }).catch((failure) => {
    //   console.log(failure);
    // })
    this.promiseData = this.getPromiseDate();
  }

  getPromiseDate(){
    return new Promise((res,rej) => {
      setTimeout(() => {
        res("Resolved");
      }, 2000);
    });
  }
}
