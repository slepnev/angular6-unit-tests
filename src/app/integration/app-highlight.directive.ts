import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class AppHighlightDirective implements OnChanges {
  defaultColor = 'yellow';
  @Input() highlight: string;

  constructor(private el: ElementRef) {
  }

  ngOnChanges() {
    this.el.nativeElement.style.backgroundColor = this.highlight || this.defaultColor;
  }
}
