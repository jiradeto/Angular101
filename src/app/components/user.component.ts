import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: ` 
  <h1>Hello {{name}}</h1>
  <p> Email: {{email}}</p>
  <p> Address: {{address.street}} {{address.city}}, {{address.country}}</p>
  `
})
export class UserComponent {
  name: string;
  email: string;
  address: address;

  constructor() {
    this.name = 'John Doe';
    this.email = 'john@gmail.com'
    this.address = {
      street: '9/220 Teparak',
      city: 'Bangkok',
      country: 'Thailand'
    }
  }
}

interface address {
  street: string;
  city: string;
  country: string
}
