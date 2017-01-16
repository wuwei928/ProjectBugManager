"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var HighLightDirective = (function () {
    function HighLightDirective(el, render) {
        this.el = el;
        this.render = render;
        this.defaultColour = "red";
    }
    HighLightDirective.prototype.onmouseenter = function () {
        this.highlight(this.defaultColour || this.hightListColour);
    };
    HighLightDirective.prototype.onmouseleave = function () {
        this.highlight(null);
    };
    HighLightDirective.prototype.highlight = function (colour) {
        this.render.setElementStyle(this.el.nativeElement, "backgroundColor", colour);
    };
    __decorate([
        core_1.Input("myHighLight"), 
        __metadata('design:type', String)
    ], HighLightDirective.prototype, "hightListColour", void 0);
    __decorate([
        core_1.HostListener("mouseenter"), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], HighLightDirective.prototype, "onmouseenter", null);
    __decorate([
        core_1.HostListener("mouseleave"), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], HighLightDirective.prototype, "onmouseleave", null);
    HighLightDirective = __decorate([
        core_1.Directive({ selector: "[myHighLight]" }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], HighLightDirective);
    return HighLightDirective;
}());
exports.HighLightDirective = HighLightDirective;
//# sourceMappingURL=highlight.js.map