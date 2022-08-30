import { Component, Input } from '@angular/core';
import { LayoutMode, StoreFacade } from '@rapp/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'rapp-drawer-view',
    template: `
        <mat-sidenav-container [ngClass]="{ 'drawer__no-border': hideBorder }">
            <mat-sidenav
                mode="side"
                position="end"
                [fixedInViewport]="true"
                [fixedTopGap]="fixedTopGap"
                [opened]="opened && (layoutMode$ | async) === 'triple'"
            >
                <ng-content select="[inDrawer]"></ng-content>
            </mat-sidenav>
            <mat-sidenav-content>
                <ng-content></ng-content>
            </mat-sidenav-content>
        </mat-sidenav-container>
    `,
    styles: [
        `
            .mat-drawer-container,
            .mat-drawer {
                background-color: transparent;
            }
            .mat-drawer {
                width: var(--master-width);
                z-index: 0 !important;
            }
            .drawer__no-border .mat-drawer {
                border-width: 0;
            }
        `,
    ],
})
export class DrawerViewComponent {
    @Input() fixedTopGap: number = 0;
    @Input() opened: boolean = false;
    @Input() hideBorder: boolean = false;

    layoutMode$: Observable<LayoutMode> = this.storeFacade.getMode();

    constructor(private storeFacade: StoreFacade) {}
}
