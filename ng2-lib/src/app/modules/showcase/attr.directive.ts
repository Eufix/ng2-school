import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[scAttr]'
})
export class AttrDirective {
  private originalColor: string = null;

  @Input('scAttr') scAttr: string;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') handleMouseEnter() {
    if (this.originalColor == null) {
      this.originalColor = this.el.nativeElement.style.backgroundColor;
    }
    this.highlight(this.scAttr || 'red');
  }

  @HostListener('mouseleave') handleMouseLeave() {
    this.highlight(this.originalColor);
    this.originalColor = null;
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
