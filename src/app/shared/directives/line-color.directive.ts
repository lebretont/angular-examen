import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appLineColor]'
})
export class LineColorDirective {

  // Permet de modifier la couleur d'un texte en fonction d'un nombre.
  @Input() set appLineColor(value: any) {
    if (typeof value == "number") {
      if (value > 2) {
        this._renderer.setStyle(this._el.nativeElement, "color", "yellow");
      } else if (value < 1) {
        this._renderer.setStyle(this._el.nativeElement, "color", "lightgray");
      }
    }
  }

  constructor(private _el: ElementRef, private _renderer: Renderer2) {
  }

}
