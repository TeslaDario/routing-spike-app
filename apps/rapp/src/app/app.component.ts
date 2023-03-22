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
                        [matMenuTriggerFor]="homeMenu.menu"
                        #homeMenuTrigger="matMenuTrigger"
                        (click)="$event.stopPropagation()"
                    ></rapp-search-input>
                    <rapp-menu-panel #homeMenu="menuPanel" backdropClass="header-menu-panel-backdrop--search">
                        <rapp-search-results></rapp-search-results>
                    </rapp-menu-panel>
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
                <div *ngIf="(layoutMode$ | async) !== 'single'" class="root-container">
                    <!--  -->
                    <mat-sidenav-container class="root-sidenav">
                        <mat-sidenav mode="side" [disableClose]="true" [opened]="appsOpened" position="end">
                            <rapp-view>
                                <rapp-toolbar>
                                    <rapp-toolbar-left title="Apps"></rapp-toolbar-left>

                                    <rapp-toolbar-right>
                                        <button mat-icon-button (click)="appsOpened = false">
                                            <mat-icon class="toolbar-icon">keyboard_double_arrow_left</mat-icon>
                                        </button>
                                    </rapp-toolbar-right>
                                </rapp-toolbar>

                                <rapp-content>
                                    <rapp-home-items></rapp-home-items>
                                </rapp-content>
                            </rapp-view>
                        </mat-sidenav>
                        <mat-sidenav-content>
                            <rapp-navbar [(appsOpened)]="appsOpened"></rapp-navbar>
                        </mat-sidenav-content>
                    </mat-sidenav-container>

                    <!-- <div class="root-nav">
                        <rapp-view>
                            <rapp-content>
                                <rapp-navbar
                                    *ngIf="(layoutMode$ | async) !== 'single'"
                                    (openApps)="toggleApps($event)"
                                ></rapp-navbar>
                            </rapp-content>
                        </rapp-view>

                        <rapp-view *ngIf="appsOpened">
                            <rapp-toolbar *ngIf="(layoutMode$ | async) !== 'single'">
                                <rapp-toolbar-left title="Apps"></rapp-toolbar-left>
                            </rapp-toolbar>
                            <rapp-content>
                                <rapp-home-items></rapp-home-items>
                            </rapp-content>
                        </rapp-view>
                    </div> -->
                    <div class="root-content">
                        <router-outlet></router-outlet>
                    </div>
                </div>
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
                height: calc($toolbarHeight - 1px);
                cursor: pointer;
                user-select: none;
            }

            .root-container {
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                height: 100%;

                .root-sidenav {
                    border-right: 1px solid $ultraLight;
                    --home-item-size: 115px;
                    --home-item-column: 2;

                    .mat-drawer {
                        width: calc(var(--master-width) - 50px - 1px);
                    }
                }
                /* .root-nav {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    border-right: 1px solid $ultraLight;
                    --home-item-size: 125px;
                    --home-item-column: 2;
                } */
                .root-content {
                    flex: 1 1 0;
                    /* flex: 0 0 calc(var(--master-width) + var(--detail-width)); */
                }
            }
        `,
    ],
})
export class AppComponent {
    title = 'Routing App';
    appsOpened = false;
    readonly layoutMode$ = this.storeFacade.getMode();

    constructor(private storeFacade: StoreFacade, private userService: UserService) {}

    openProfile() {
        this.userService.openActor();
    }
}
