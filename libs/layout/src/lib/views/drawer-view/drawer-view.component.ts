import { Component, ContentChild, Directive, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { StoreFacade } from '@rapp/store';

@Directive({ selector: '[rappFixedDrawer]' })
export class FixedDrawerViewDirective {}

@Component({
    selector: 'rapp-drawer-view',
    template: `
        <mat-sidenav-container [ngClass]="{ 'drawer__no-border': hideBorder }">
            <mat-sidenav
                mode="side"
                position="end"
                [disableClose]="true"
                [opened]="true"
                *ngIf="fixedDrawer; else routableDrawer"
            >
                <ng-content select="[rappFixedDrawer]"></ng-content>
            </mat-sidenav>

            <ng-template #routableDrawer>
                <mat-sidenav
                    mode="side"
                    position="end"
                    [disableClose]="true"
                    [opened]="outlet.isActivated"
                    (openedChange)="onOpenedChange($event)"
                    *ngIf="(layoutMode$ | async) === 'triple'"
                >
                    <router-outlet #outlet="outlet"></router-outlet>
                </mat-sidenav>
            </ng-template>

            <mat-sidenav-content>
                <ng-content></ng-content>
            </mat-sidenav-content>
        </mat-sidenav-container>

        <router-outlet *ngIf="(layoutMode$ | async) !== 'triple'"></router-outlet>
    `,
    styles: [
        `
            :host {
                display: block;
                height: 100%;
            }
            .mat-drawer-container,
            .mat-drawer {
                background-color: transparent;
                height: 100%;
            }
            .mat-drawer {
                width: var(--master-width);
            }
            .drawer__no-border .mat-drawer {
                border-width: 0;
            }
        `,
    ],
})
export class DrawerViewComponent {
    @ViewChild(MatSidenav, { static: true }) drawer!: MatSidenav;
    @ContentChild(FixedDrawerViewDirective) fixedDrawer!: FixedDrawerViewDirective;

    @Input() hideBorder = false;
    @Output() openedChange = new EventEmitter<boolean>();

    readonly layoutMode$ = this.storeFacade.getMode();

    constructor(private storeFacade: StoreFacade) {}

    onOpenedChange(event: boolean) {
        this.openedChange.emit(event);
    }
}
