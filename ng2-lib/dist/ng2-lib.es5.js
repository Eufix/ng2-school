import { Directive, ElementRef, HostListener, Input, NgModule, TemplateRef, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var AttrDirective = (function () {
    function AttrDirective(el) {
        this.el = el;
        this.originalColor = null;
    }
    AttrDirective.prototype.handleMouseEnter = function () {
        if (this.originalColor == null) {
            this.originalColor = this.el.nativeElement.style.backgroundColor;
        }
        this.highlight(this.scAttr || 'red');
    };
    AttrDirective.prototype.handleMouseLeave = function () {
        this.highlight(this.originalColor);
        this.originalColor = null;
    };
    AttrDirective.prototype.highlight = function (color) {
        this.el.nativeElement.style.backgroundColor = color;
    };
    return AttrDirective;
}());
__decorate$1([
    Input('scAttr'),
    __metadata("design:type", String)
], AttrDirective.prototype, "scAttr", void 0);
__decorate$1([
    HostListener('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AttrDirective.prototype, "handleMouseEnter", null);
__decorate$1([
    HostListener('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AttrDirective.prototype, "handleMouseLeave", null);
AttrDirective = __decorate$1([
    Directive({
        selector: '[scAttr]'
    }),
    __metadata("design:paramtypes", [ElementRef])
], AttrDirective);
var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var StructDirective = (function () {
    function StructDirective(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.hasView = false;
    }
    Object.defineProperty(StructDirective.prototype, "scStruct", {
        set: function (condition) {
            if (condition && !this.hasView) {
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.hasView = true;
            }
            else if (!condition && this.hasView) {
                this.viewContainer.clear();
                this.hasView = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    return StructDirective;
}());
__decorate$2([
    Input(),
    __metadata$1("design:type", Boolean),
    __metadata$1("design:paramtypes", [Boolean])
], StructDirective.prototype, "scStruct", null);
StructDirective = __decorate$2([
    Directive({
        selector: '[scStruct]'
    }),
    __metadata$1("design:paramtypes", [TemplateRef,
        ViewContainerRef])
], StructDirective);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ShowcaseModule = (function () {
    function ShowcaseModule() {
    }
    return ShowcaseModule;
}());
ShowcaseModule = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        declarations: [AttrDirective, StructDirective],
        exports: [AttrDirective, StructDirective]
    })
], ShowcaseModule);
/**
 * Generated bundle index. Do not edit.
 */
export { AttrDirective as ɵa, StructDirective as ɵb, ShowcaseModule };
//# sourceMappingURL=ng2-lib.es5.js.map
