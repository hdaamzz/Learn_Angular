import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [ CommonModule,FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  constructor(){}
  //interpolation
  name:string="It is a string interpolation";
  age:number=22;
  truthy:boolean=true;
  //property bindings
  imageUrl = 'https://i.imgur.com/uVq5zvs.jpeg';
  isDisabled = true;
  redColor="text-danger"
  yellow="text-warning"
  //dynamic class
  isActive = true;
  //inline styles
  color = 'blue';
  fontSize = '20px';
  //event bindings
  active=true;
  hov="HOVERED"
  hovBtn=false;
  onButtonClick() {
    alert('Button clicked!');
  }
  onGreet(name: string) {
    alert(`Hello, ${name}!`);
  }
  text:string=""
  onInput(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.text=inputValue
  }
  onKeyPress(event: KeyboardEvent) {
    console.log('Key pressed:', event.key);
  }
  onMouseOver() {
    this.hovBtn=!this.hovBtn
  }
  //two way binding
  twowaytext=""


}
