import {
    AfterContentChecked,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { StoreFacade } from '@rapp/store';
import { DrawerService } from './drawer.service';

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
export class DrawerViewComponent implements OnInit, AfterContentChecked {
    @ViewChild(MatSidenav, { static: true }) drawer!: MatSidenav;
    @Input() hideBorder = false;

    @Input() opened = false;
    @Output() openedChange = new EventEmitter<boolean>();

    fixedTopGap = 0;
    readonly layoutMode$ = this.storeFacade.getMode();

    constructor(
        private elRef: ElementRef<HTMLElement>,
        private storeFacade: StoreFacade,
        private drawerService: DrawerService
    ) {}

    ngOnInit(): void {
        this.drawerService.drawer = this.drawer;
        this.drawer.closedStart.subscribe(() => this.openedChange.emit(false));
    }

    ngAfterContentChecked(): void {
        const el = this.elRef.nativeElement;
        this.fixedTopGap = el.getBoundingClientRect().top;
    }
}
