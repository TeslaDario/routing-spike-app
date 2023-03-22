import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { StoreFacade } from '@rapp/store';

@Component({
    selector: 'rapp-drawer-view',
    template: `
        <ng-container *ngIf="(layoutMode$ | async) !== 'triple'; else sidenavTemp">
            <ng-container [ngTemplateOutlet]="content"></ng-container>
            <router-outlet></router-outlet>
        </ng-container>

        <ng-template #sidenavTemp>
            <mat-sidenav-container [ngClass]="{ 'drawer__no-border': hideBorder }" [hasBackdrop]="false">
                <mat-sidenav
                    [mode]="((detailWidth$ | async) ?? 0) >= 768 ? 'side' : 'over'"
                    position="end"
                    [disableClose]="true"
                    [opened]="outlet.isActivated"
                    (openedChange)="onOpenedChange($event)"
                >
                    <router-outlet #outlet="outlet"></router-outlet>
                </mat-sidenav>

                <mat-sidenav-content>
                    <ng-container [ngTemplateOutlet]="content"></ng-container>
                </mat-sidenav-content>
            </mat-sidenav-container>
        </ng-template>

        <!-- ONLY ONE ng-content without SELECT attr can exist in the template -->
        <ng-template #content><ng-content></ng-content></ng-template>
    `,
    styles: [
        `
            @use 'apps/rapp/src/assets/styles' as *;
            :host {
                display: block;
                height: 100%;
            }
            .mat-drawer-container,
            .mat-drawer {
                background-color: transparent;
                height: 100%;
            }
            .mat-drawer-side {
                width: var(--master-width);
            }
            .mat-drawer-over {
                width: var(--detail-width);
            }
            .drawer__no-border .mat-drawer {
                border-width: 0;
            }
        `,
    ],
})
export class DrawerViewComponent {
    @ViewChild(MatSidenav, { static: true }) drawer!: MatSidenav;
    @Input() hideBorder = false;
    @Output() openedChange = new EventEmitter<boolean>();

    readonly layoutMode$ = this.storeFacade.getMode();
    readonly detailWidth$ = this.storeFacade.getDetailWidth();

    constructor(private storeFacade: StoreFacade) {}

    onOpenedChange(event: boolean) {
        this.openedChange.emit(event);
    }
}
