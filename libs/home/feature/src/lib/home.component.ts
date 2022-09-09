import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@rapp/users';

@Component({
    selector: 'rapp-home',
    template: `
        <rapp-view [showBottomNavbar]="true">
            <rapp-toolbar>
                <rapp-toolbar-left>
                    <h1 class="mb-0">Home</h1>
                </rapp-toolbar-left>

                <rapp-toolbar-right>
                    <button mat-icon-button (click)="openSettings()">
                        <mat-icon class="toolbar-icon">settings</mat-icon>
                    </button>
                    <rapp-avatar (click)="openProfile()" size="s" class="ml-4"></rapp-avatar>
                </rapp-toolbar-right>
            </rapp-toolbar>

            <rapp-content>
                <div class="home-wrapper">
                    <img class="logo" src="assets/imgs/logo.png" />
                    <rapp-home-items></rapp-home-items>
                </div>
            </rapp-content>
        </rapp-view>

        <router-outlet></router-outlet>
    `,
    styles: [
        `
            .home-wrapper {
                text-align: center;

                .logo {
                    height: 100px;
                    padding: 20px 0;
                }
            }
        `,
    ],
})
export class HomeComponent {
    constructor(private router: Router, private userService: UserService) {}

    openProfile() {
        this.userService.openActor();
    }

    openSettings() {
        this.router.navigate(['home', 'settings']);
    }
}
