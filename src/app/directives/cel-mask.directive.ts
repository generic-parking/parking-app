import { Directive, ElementRef, Renderer } from '@angular/core';
import { conformToMask } from 'angular2-text-mask';

@Directive({
  selector: '[celMask]'
})
export class CelMaskDirective {

  // constructor(private el: ElementRef) {

  //   const mask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  //   el.nativeElement.textMask = { mask: mask };
  // }

  constructor (private _elRef: ElementRef, private _renderer: Renderer) { console.log('!'); }
  
  ngOnInit() {
    const mask = "{ mask: ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/] }";
    this._renderer.setElementAttribute(this._elRef.nativeElement, 'textMask', mask);
  }
}
