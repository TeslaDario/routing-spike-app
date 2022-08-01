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

            .toolbar-wrapper {
                display: flex;
                align-items: center;
                padding-left: 10px;
                padding-right: 10px;
                height: $toolbarHeight;
                box-shadow: 0 0 3px 1px rgb(0 0 0 / 10%);
            }
        `,
    ],
})
export class ToolbarComponent {}
