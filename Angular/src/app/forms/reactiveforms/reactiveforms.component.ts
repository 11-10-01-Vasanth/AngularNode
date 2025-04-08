import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  standalone: false,
  templateUrl: './reactiveforms.component.html',
  styleUrl: './reactiveforms.component.css'
})
export class ReactiveformsComponent {

// public handleSubmit() {
//   console.log(this.personForm.value);
// }

public handleSubmit(person: any) {
  console.log(person);
}

  firstName: any="Vasantha kumar";
  lastName:any="M";
  email:any="vasanth@gmail.com";
  mobile:any=9626542367;
  gender:any="M";
  street:any="abc"
  city:any="vnr"
  state:any="Tamilnadu"

  states = [
    "Tamilnadu","Kerela","Kolkata"
  ]

  public personForm!: FormGroup;

  ngOnInit(){
    this.personForm = new FormGroup({
      firstName: new FormControl("Vasantha kumar",[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
      lastName: new FormControl("M",[Validators.required,Validators.maxLength(5)]),
      email: new FormControl("vasanth@gmail.com",[Validators.required]),
      gender: new FormControl("M"),
      address: new FormGroup({
        street: new FormControl("abc"),
        city: new FormControl("vnr"),
        state: new FormControl("Tamilnadu"),
        zip: new FormControl("656565"),
      })
    });
  }
}
