import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFwd]'
})
export class FwdDirective {

  constructor(
    private el: ElementRef
  ) { 
   
  }

  @HostListener('click')
  fwdFunc(){
    var elm = this.el.nativeElement.parentElement.parentElement;
    var card = elm.getElementsByClassName("mat-card");
    console.log(card)
    elm.append(card[0])
  }

}
