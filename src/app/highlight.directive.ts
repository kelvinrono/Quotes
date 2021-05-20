import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef ) {
    el.nativeElement.style.backgroundColor = 'blue'
    el.nativeElement.style.color = 'white'
    el.nativeElement.style.borderRadius = '10px'
   }

}
