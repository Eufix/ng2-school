import { ElementRef } from '@angular/core';
export declare class AttrDirective {
    private el;
    private originalColor;
    scAttr: string;
    constructor(el: ElementRef);
    handleMouseEnter(): void;
    handleMouseLeave(): void;
    private highlight(color);
}
