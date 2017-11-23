import { TemplateRef, ViewContainerRef } from '@angular/core';
export declare class StructDirective {
    private templateRef;
    private viewContainer;
    private hasView;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef);
    scStruct: boolean;
}
