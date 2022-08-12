import { Component, Input } from '@angular/core';
import { StoreFacade } from '@rapp/store';

@Component({
    selector: 'rapp-page',
    template: `
        <div class="page-wrapper">
            <ng-content select="rapp-toolbar"></ng-content>

            <ng-content select="rapp-content"></ng-content>

            <rapp-navbar *ngIf="hasBottomTabsNavigator" [bottom]="true"></rapp-navbar>
        </div>
    `,
    styles: [
        `
            .page-wrapper {
                display: flex;
                flex-direction: column;
                height: 100%;
                background-color: #fff;
            }
        `,
    ],
})
export class PageComponent {
    @Input() hasBottomTabsNavigator = false;
    layoutMode$ = this.storeFacade.getMode();

    constructor(private storeFacade: StoreFacade) {}
}
