import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { HighlightDirective } from '../../shared/custom-directive/highlight.directive';
import { TextSizeDirective } from '../../shared/custom-directive/text-size.directive';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule,FormsModule,HighlightDirective,TextSizeDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  // 1 .Component Directive
  name:string="HD AAMZZ"
  // 2 .structural directives
  // These change the DOM layout by adding/removing elements
  //ngIf  :-
  isVisible:boolean=true
  //ngFor  :-
  disctricts:string[]=['kasargode','kannur','wayanad','kozhikkode','malappuram']
  //switch  :-
  Value:string='Active';
  // 3  . Attribute Directives Examples
  // These change the appearance or behavior of an element
  // ngStyle example
  fontSize:number=34
  textColor:string="Green"
  myStyle={'color': this.textColor, 'font-size': this.fontSize + 'px'}
  //ngClass example

  isActive:boolean=false;
  isDisable:boolean=true;

  //4  .custom directives
  
  // <p appHighlight highlightColor="lightblue">
  //     Hover over this text to see the highlight effect
  //   </p>


  // <p appTextSize [textSize]="28">
  //     click this text 
  //  </p>



}
