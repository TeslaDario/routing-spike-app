import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IState, StoreFacade } from '@rapp/store';
import { UserService } from '@rapp/users';
import { Observable } from 'rxjs';

@Component({
    selector: 'rapp-root',
    template: `
        <rapp-page>
            <rapp-toolbar *ngIf="(layoutMode$ | async) !== 'single'">
                <rapp-toolbar-left>
                    <img [routerLink]="'/'" class="toolbar-app-logo" src="assets/imgs/logo.png" />
                </rapp-toolbar-left>

                <rapp-toolbar-center>
                    <rapp-header-navbar></rapp-header-navbar>
                </rapp-toolbar-center>

                <rapp-toolbar-right>
                    <button
                        mat-icon-button
                        [matMenuTriggerFor]="searchMenu.menu"
                        #searchMenuTrigger="matMenuTrigger"
                        [ngClass]="{ 'mat-primary': searchMenuTrigger.menuOpen }"
                    >
                        <mat-icon class="toolbar-icon">search</mat-icon>
                    </button>
                    <rapp-menu-panel #searchMenu="menuPanel" [hasSearch]="true">
                        <rapp-activities-items></rapp-activities-items>
                    </rapp-menu-panel>

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
                <router-outlet></router-outlet>
            </rapp-content>
        </rapp-page>

        <router-outlet name="modal"></router-outlet>
        <router-outlet name="users"></router-outlet>
        <router-outlet name="media"></router-outlet>
    `,
    styles: [
        `
            @use 'apps/rapp/src/assets/styles' as *;

            .toolbar-app-logo {
                height: $toolbarHeight;
                cursor: pointer;
                user-select: none;
            }
        `,
    ],
})
export class AppComponent {
    title = 'Routing App v2';
    layoutMode$: Observable<IState['mode']> = this.storeFacade.getMode();

    constructor(private storeFacade: StoreFacade, private router: Router, private userService: UserService) {}

    openSearch() {
        this.router.navigate(['newsfeed', { outlets: { modal: ['search'] } }]);
    }

    openActivities() {
        this.router.navigate(['activities']);
    }

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
