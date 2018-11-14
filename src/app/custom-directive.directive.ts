import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

// selector is wrapped in [] and doesnt have a template associated with it.
@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {
  @HostBinding('class.li-underline') private isHovering: boolean = false;
  constructor(private el: ElementRef) { 

  }

  @HostListener('mouseover') onMouseOver(){
    this.el.nativeElement.style.color ='red';
    this.el.nativeElement.style.cursor ='pointer';
    this.isHovering = true;
  }

  @HostListener('mouseout') onMouseOut(){
    this.el.nativeElement.style.color ='black';
    this.el.nativeElement.style.cursor ='default';
    this.isHovering = false;
  }

}