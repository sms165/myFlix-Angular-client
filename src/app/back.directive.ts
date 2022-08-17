import { isNgTemplate } from '@angular/compiler';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBack]'
})
export class BackDirective {

  constructor(
     private el: ElementRef) {

      }

  @HostListener('click')
  backFunc(){
    var elm = this.el.nativeElement.parentElement.parentElement;
    var card = elm.getElementsByClassName("mat-card");
    console.log(card)
    elm.prepend(card[card.length -1])
  }

}
