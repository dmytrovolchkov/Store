import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appToolTip]'
})
export class ToolTipDirective {

  constructor(private el: ElementRef, private r: Renderer2) {
    console.log(el.nativeElement);


    @HostListener('mouseenter') function onEnter() {
      this.r.setStyle(this.el.nativeElement, 'color', 'blue');
    }


  }
}
