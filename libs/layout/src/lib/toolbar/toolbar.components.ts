import { Component } from '@angular/core';

@Component({
    selector: 'rapp-toolbar',
    template: `
        <div class="toolbar-wrapper">
            <ng-content select="rapp-toolbar-left"></ng-content>
            <span class="spacer"></span>
            <ng-content select="rapp-toolbar-right"></ng-content>
        </div>
    `,
    styles: [
        `
            @use 'apps/rapp/src/assets/styles' as *;

            :host {
                display: block;
                z-index: 1;
            }
            .toolbar-wrapper {
                display: flex;
                align-items: center;
                padding-left: 10px;
                padding-right: 10px;
                height: $toolbarHeight;
                box-shadow: 0 0 3px 1px rgb(0 0 0 / 10%);
                padding-top: var(--safe-area-inset-top, 0px);
            }
        `,
    ],
})
export class ToolbarComponent {}
