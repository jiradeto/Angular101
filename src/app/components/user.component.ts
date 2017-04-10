import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: ` 
  <h1>{{name}}</h1>
  <p> Email: {{email}}</p>
  <p> Address: {{address.street}} {{address.city}}, {{address.country}}</p>
  <button (click)="toggleHobbies()">{{showHobbies ? "Hide Hobbies": "Show Hobbies"}}</button> 
  <div *ngIf="showHobbies">
    <h3> Hobbies </h3>
    <ul>
      <li *ngFor="let hobby of hobbies; let i = index">
        {{hobby}} <button (click)="deleteHobby(i)">X</button>
      </li>
    </ul>
    <form (submit)="addHobby(hobby.value)"> 
      <label> Add Hobby: </label><br />
      <input type="text" #hobby /><br />
    </form>
  </div>

  <form>
    <label>Name: </label><br />
    <input type="text" name="name" [(ngModel)]= "name" /><br/>
    <label>Email: </label><br />
    <input type="text" name="email" [(ngModel)]= "email" /><br/>
    <label>Street: </label><br />
    <input type="text" name="street" [(ngModel)]= "address.street" /><br/>
    <label>City: </label><br />
    <input type="text" name="city" [(ngModel)]= "address.city" /><br/>
    <label>Street: </label><br />
    <input type="text" name="country" [(ngModel)]= "address.country" /><br/>
  </form>
  `
})
export class UserComponent {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;

  constructor() {
    this.name = 'John Doe';
    this.email = 'john@gmail.com'
    this.address = {
      street: '9/220 Teparak',
      city: 'Bangkok',
      country: 'Thailand'
    }
    this.hobbies = ['Music', 'Movies', 'Sports']
    this.showHobbies = false;
  }

  toggleHobbies(){
    this.showHobbies = !this.showHobbies;
  }
  addHobby(hobby){
    this.hobbies.push(hobby);
  }
  deleteHobby(i){
    this.hobbies.splice(i,1)
  }
}

interface address {
  street: string;
  city: string;
  country: string
}
