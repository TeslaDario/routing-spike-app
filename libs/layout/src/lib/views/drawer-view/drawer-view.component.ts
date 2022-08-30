import { AfterContentChecked, Component, ElementRef, Input } from '@angular/core';
import { LayoutMode, StoreFacade } from '@rapp/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'rapp-drawer-view',
    template: `
        <mat-sidenav-container [ngClass]="{ 'drawer__no-border': hideBorder }">
            <mat-sidenav
                mode="side"
                position="end"
                [disableClose]="true"
                [fixedInViewport]="true"
                [fixedTopGap]="fixedTopGap"
                [opened]="opened && (layoutMode$ | async) === 'triple'"
            >
                <ng-content select="[rappDrawer]"></ng-content>
            </mat-sidenav>
            <mat-sidenav-content>
                <ng-content></ng-content>
            </mat-sidenav-content>
        </mat-sidenav-container>
    `,
    styles: [
        `
            :host {
                display: block;
            }
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
export class DrawerViewComponent implements AfterContentChecked {
    @Input() opened = false;
    @Input() hideBorder = false;

    fixedTopGap = 0;
    layoutMode$: Observable<LayoutMode> = this.storeFacade.getMode();

    constructor(private elRef: ElementRef<HTMLElement>, private storeFacade: StoreFacade) {}

    ngAfterContentChecked(): void {
        const el = this.elRef.nativeElement;
        this.fixedTopGap = el.getBoundingClientRect().top;
    }
}
