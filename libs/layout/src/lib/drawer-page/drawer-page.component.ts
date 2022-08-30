import { Component, Input } from '@angular/core';

@Component({
    selector: 'rapp-drawer-page',
    template: `
        <mat-sidenav-container class="rapp-drawer" [ngClass]="{ 'rapp-drawer__no-border': hideBorder }">
            <mat-sidenav
                mode="side"
                position="end"
                [fixedInViewport]="true"
                [fixedTopGap]="fixedTopGap"
                [opened]="opened"
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
            .mat-drawer-backdrop.mat-drawer-shown,
            .mat-drawer {
                background-color: transparent;
            }

            .rapp-drawer {
                .mat-drawer {
                    width: var(--master-width);
                }
                &__no-border .mat-drawer {
                    border-width: 0;
                }
            }
        `,
    ],
})
export class DrawerPageComponent {
    @Input() fixedTopGap: number = 0;
    @Input() opened: boolean = false;
    @Input() hideBorder: boolean = false;
}
