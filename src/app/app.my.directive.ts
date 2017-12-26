import { Directive, ElementRef, Renderer } from '@angular/core';
@Directive({
  selector: '[appMyDirective]',
})
export class AppMyDirective {
  constructor(el: ElementRef, render: Renderer) {
    render.setElementStyle(el.nativeElement, 'backgroundColor', 'green');
  }
}
