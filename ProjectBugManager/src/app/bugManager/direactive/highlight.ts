import { Directive, ElementRef, Input, HostListener, Renderer } from '@angular/core'

@Directive({ selector: "[myHighLight]" })
export class HighLightDirective {
    constructor(private el: ElementRef, private render: Renderer) { }
    private defaultColour = "red";
    @Input("myHighLight") hightListColour: string;
    @HostListener("mouseenter") onmouseenter() {
        this.highlight(this.defaultColour || this.hightListColour);
    }

    @HostListener("mouseleave") onmouseleave() {
        this.highlight(null);
    }

    private highlight(colour: string) {
        this.render.setElementStyle(this.el.nativeElement, "backgroundColor", colour);
    }
}