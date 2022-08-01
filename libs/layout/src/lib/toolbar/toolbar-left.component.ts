import { Component } from '@angular/core';

@Component({
    selector: 'rapp-toolbar-left',
    template: '<div class="toolbar-left-wrapper"><ng-content></ng-content></div>',
    styles: [
        `
            .toolbar-left-wrapper {
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
            }
        `,
    ],
})
export class ToolbarLeftComponent {}
