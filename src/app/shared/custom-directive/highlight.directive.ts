import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() highlightColor:string='yellow'

  constructor(private el:ElementRef) { }
  
  @HostListener('mouseenter') onMouseEnter(){
      this.highlight(this.highlightColor)
  }
  
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight(null)
  }


  private highlight(color:string | null){
    this.el.nativeElement.style.backgroundColor = color
  }

}
