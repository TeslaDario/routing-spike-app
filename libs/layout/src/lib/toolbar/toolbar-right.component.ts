import { Component } from '@angular/core';

@Component({
    selector: 'rapp-toolbar-right',
    template: '<div class="toolbar-right-wrapper"><ng-content></ng-content></div>',
    styles: [
        `
            :host {
                flex-shrink: 0;
            }
            .toolbar-right-wrapper {
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                align-items: center;
            }
        `,
    ],
})
export class ToolbarRightComponent {}
