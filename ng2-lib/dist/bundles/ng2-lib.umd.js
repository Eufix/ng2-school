(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['ng2-lib'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

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
exports.ɵa = (function () {
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
    core.Input('scAttr'),
    __metadata("design:type", String)
], exports.ɵa.prototype, "scAttr", void 0);
__decorate$1([
    core.HostListener('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], exports.ɵa.prototype, "handleMouseEnter", null);
__decorate$1([
    core.HostListener('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], exports.ɵa.prototype, "handleMouseLeave", null);
exports.ɵa = __decorate$1([
    core.Directive({
        selector: '[scAttr]'
    }),
    __metadata("design:paramtypes", [core.ElementRef])
], exports.ɵa);
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
exports.ɵb = (function () {
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
    core.Input(),
    __metadata$1("design:type", Boolean),
    __metadata$1("design:paramtypes", [Boolean])
], exports.ɵb.prototype, "scStruct", null);
exports.ɵb = __decorate$2([
    core.Directive({
        selector: '[scStruct]'
    }),
    __metadata$1("design:paramtypes", [core.TemplateRef,
        core.ViewContainerRef])
], exports.ɵb);
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
exports.ShowcaseModule = (function () {
    function ShowcaseModule() {
    }
    return ShowcaseModule;
}());
exports.ShowcaseModule = __decorate([
    core.NgModule({
        imports: [
            common.CommonModule
        ],
        declarations: [exports.ɵa, exports.ɵb],
        exports: [exports.ɵa, exports.ɵb]
    })
], exports.ShowcaseModule);

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng2-lib.umd.js.map
