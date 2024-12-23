import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTextSize]',
  standalone: true
})
export class TextSizeDirective {
  @Input () textSize=16
  constructor( private el:ElementRef) { }

  @HostListener('click') onClick(){
    this.sizer(this.textSize)
  }

  private sizer(size:number | null){
    this.el.nativeElement.style.fontSize=`${size}px`
  }
}
