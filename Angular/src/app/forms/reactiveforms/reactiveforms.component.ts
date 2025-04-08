import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  standalone: false,
  templateUrl: './reactiveforms.component.html',
  styleUrl: './reactiveforms.component.css'
})
export class ReactiveformsComponent {
public handleSubmit() {
  console.log(this.personForm.value);
}

  states = [
    "Tamilnadu","Kerela","Kolkata"
  ]

  public personForm!: FormGroup;

  ngOnInit(){
    this.personForm = new FormGroup({
      firstName: new FormControl("Vasantha kumar",[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
      lastName: new FormControl("M",[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
      email: new FormControl("vasanth@gmail.com",[Validators.required]),
      gender: new FormControl("M",[Validators.required]),
      address: new FormGroup({
        street: new FormControl("abc"),
        city: new FormControl("vnr"),
        state: new FormControl("Tamilnadu"),
        zip: new FormControl("656565"),
      })
    });
  }
}
