import { Component } from '@angular/core';

@Component({
    selector: 'rapp-toolbar',
    template: `
        <div class="toolbar-wrapper">
            <ng-content select="rapp-toolbar-left"></ng-content>
            <span class="spacer"></span>
            <ng-content select="rapp-toolbar-center"></ng-content>
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
            :host:first-of-type .toolbar-wrapper {
                padding-top: var(--safe-area-inset-top, 0px);
                height: calc($navbarHeight + var(--safe-area-inset-top, 0px));
            }
            .toolbar-wrapper {
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: space-between;
                align-items: center;
                padding-left: 10px;
                padding-right: 10px;
                height: $navbarHeight;
                border-bottom: 1px solid $ultraLight;
                box-sizing: border-box;
            }
        `,
    ],
})
export class ToolbarComponent {}
