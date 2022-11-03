import { Component } from '@angular/core';
import { StoreFacade } from '@rapp/store';
import { UserService } from '@rapp/users';

@Component({
    selector: 'rapp-root',
    template: `
        <rapp-view>
            <rapp-toolbar *ngIf="(layoutMode$ | async) !== 'single'">
                <rapp-toolbar-left>
                    <img [routerLink]="'/'" class="toolbar-app-logo" src="assets/imgs/logo.png" />
                </rapp-toolbar-left>

                <rapp-toolbar-center class="spacer">
                    <rapp-search-input
                        [matMenuTriggerFor]="homeMenu"
                        #homeMenuTrigger="matMenuTrigger"
                        (click)="$event.stopPropagation()"
                    ></rapp-search-input>
                    <mat-menu
                        #homeMenu="matMenu"
                        class="header-menu-panel"
                        backdropClass="header-menu-panel-backdrop--search"
                    >
                        <rapp-search-results></rapp-search-results>
                    </mat-menu>
                </rapp-toolbar-center>

                <rapp-toolbar-right>
                    <button
                        mat-icon-button
                        [matMenuTriggerFor]="notificationMenu.menu"
                        #notificationMenuTrigger="matMenuTrigger"
                        [ngClass]="{ 'mat-primary': notificationMenuTrigger.menuOpen }"
                    >
                        <mat-icon class="toolbar-icon">notifications_none</mat-icon>
                    </button>
                    <rapp-menu-panel #notificationMenu="menuPanel" title="Activities">
                        <rapp-activities-items></rapp-activities-items>
                    </rapp-menu-panel>

                    <rapp-avatar
                        size="s"
                        class="ml-4"
                        [matMenuTriggerFor]="settingsMenu.menu"
                        #settingsMenuTrigger="matMenuTrigger"
                        [ngClass]="{ active: settingsMenuTrigger.menuOpen }"
                    ></rapp-avatar>
                    <rapp-menu-panel #settingsMenu="menuPanel" title="Settings">
                        <rapp-item
                            leftIcon="account_circle"
                            text="My Profile"
                            rightIcon="edit"
                            (click)="openProfile()"
                        ></rapp-item>
                        <hr />
                        <rapp-item leftIcon="chat" text="Help and Feedback" rightIcon="chevron_right"></rapp-item>
                        <rapp-item leftIcon="info" text="App info" rightIcon="chevron_right"></rapp-item>
                        <rapp-item leftIcon="logout" text="Logout"></rapp-item>
                    </rapp-menu-panel>
                </rapp-toolbar-right>
            </rapp-toolbar>
            <rapp-content>
                <router-outlet *ngIf="(layoutMode$ | async) === 'single'"></router-outlet>

                <mat-sidenav-container class="root-sidenav" *ngIf="(layoutMode$ | async) !== 'single'">
                    <mat-sidenav mode="side" [disableClose]="true" [opened]="true">
                        <rapp-view>
                            <rapp-toolbar>
                                <rapp-toolbar-left title="Apps"></rapp-toolbar-left>
                            </rapp-toolbar>

                            <rapp-content>
                                <rapp-home-items></rapp-home-items>
                            </rapp-content>
                        </rapp-view>
                    </mat-sidenav>
                    <mat-sidenav-content>
                        <router-outlet></router-outlet>
                    </mat-sidenav-content>
                </mat-sidenav-container>
            </rapp-content>
        </rapp-view>

        <router-outlet name="modal"></router-outlet>
        <router-outlet name="users"></router-outlet>
        <router-outlet name="media"></router-outlet>
    `,
    styles: [
        `
            @use 'apps/rapp/src/assets/styles' as *;

            .toolbar-app-logo {
                height: calc($navbarHeight - 1px);
                cursor: pointer;
                user-select: none;
            }

            .root-sidenav {
                --combined-detail-shrink: 1;

                .mat-drawer {
                    rapp-toolbar {
                        display: none;
                    }

                    --home-item-size: 40px;
                    --home-item-column: 1;

                    @media (min-width: $l) {
                        --home-item-size: 86px;
                        --home-item-column: 2;
                        rapp-toolbar {
                            display: block;
                        }
                    }
                    @media (min-width: $xl) {
                        --home-item-column: 3;
                    }
                }
                .mat-drawer-content {
                    z-index: 3;
                    height: calc(100vh - 50px);
                }
            }
        `,
    ],
})
export class AppComponent {
    title = 'Routing App';
    readonly layoutMode$ = this.storeFacade.getMode();

    constructor(private storeFacade: StoreFacade, private userService: UserService) {}

    openProfile() {
        this.userService.openActor();
    }
    // constructor(private router: Router, private route: ActivatedRoute) {
    //     this.router.events
    //         .pipe(filter((e) => e instanceof NavigationEnd || e instanceof NavigationStart))
    //         .subscribe((e) => console.log(e));
    //     const urlWithoutAuxiliaryRoute = this.router
    //         .createUrlTree(['.'], { relativeTo: this.route })
    //         .root.children[PRIMARY_OUTLET].toString();
    //     console.log(urlWithoutAuxiliaryRoute);
    //     this.router.navigate([urlWithoutAuxiliaryRoute]);
    // }
}
