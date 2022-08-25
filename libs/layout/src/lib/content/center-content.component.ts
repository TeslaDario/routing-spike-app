import { Component } from '@angular/core';

@Component({
    selector: 'rapp-center-content',
    template: '<ng-content></ng-content>',
    styles: [
        `
            @use 'apps/rapp/src/assets/styles' as *;

            :host {
                display: block;
                width: 100%;
                margin: 0 auto;
                box-sizing: border-box;
                max-width: $contentWidth;
            }
        `,
    ],
})
export class CenterContentComponent {}
