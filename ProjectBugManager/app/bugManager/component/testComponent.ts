import {
    Component, trigger, transition, animate,HostBinding,
    style, state
} from '@angular/core';

@Component({
    selector: 'hero-birthday',
    template: `<p>The hero's birthday is {{ birthday | date:format }}</p>
            <H1>{{"test"|uppercase}}</H1>
             <button (click)="toggleFormat()">Toggle Format</button>`,
    animations: [
        trigger('routeAnimation', [
            state('*',
                style({
                    opacity: 1,
                    transform: 'translateX(0)'
                })
            ),
            transition(':enter', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100%)'
                }),
                animate('0.2s ease-in')
            ]),
            transition(':leave', [
                animate('0.5s ease-out', style({
                    opacity: 0,
                    transform: 'translateY(100%)'
                }))
            ])
        ])
    ]
})
export class TestComponent {
    toggle = true;
    birthday = new Date(1988, 3, 15); // April 15, 1988

    @HostBinding('@routeAnimation') get routeAnimation() {
        return true;
    }
    @HostBinding('style.display') get display() {
        return 'block';
    }
    @HostBinding('style.position') get position() {
        return 'absolute';
    }

    get format() { return this.toggle ? "yyyy-MM-dd" : "dd/MM/yy" }
    toggleFormat() {
        this.toggle = !this.toggle;
    }
}