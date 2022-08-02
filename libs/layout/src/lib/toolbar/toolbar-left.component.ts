import { Component } from '@angular/core';

@Component({
    selector: 'rapp-toolbar-left',
    template: '<div class="toolbar-left-wrapper"><ng-content></ng-content></div>',
    styles: [
        `
            :host {
                flex-shrink: 0;
            }
            .toolbar-left-wrapper {
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                align-items: center;
            }
        `,
    ],
})
export class ToolbarLeftComponent {}
