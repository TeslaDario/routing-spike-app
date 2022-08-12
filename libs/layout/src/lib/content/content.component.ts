import { Component, HostBinding, Input } from '@angular/core';

@Component({
    selector: 'rapp-content',
    template: '<ng-content></ng-content>',
    styles: [
        `
            :host {
                display: block;
                flex: 1 1 100%;
                position: relative;
                overflow: scroll;
                padding-bottom: var(--safe-area-inset-bottom, 0px);
            }

            :host.bubble-pattern {
                background: #fff url(/assets/imgs/Bubble_Pattern.svg) center / cover no-repeat;
            }
        `,
    ],
})
export class ContentComponent {
    @HostBinding('class.bubble-pattern') @Input() showBackgroundImage = false;
}
