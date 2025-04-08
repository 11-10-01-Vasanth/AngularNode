import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  standalone: false,
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {
  name = 'Vasanth';
  greetUser() {
    alert('Hello ' + this.name);
  }

  myName = 'Vasanth';

}
