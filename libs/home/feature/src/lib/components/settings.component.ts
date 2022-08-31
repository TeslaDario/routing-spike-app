import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'rapp-settings',
    template: `
        <rapp-modal-view>
            <rapp-view>
                <rapp-toolbar>
                    <rapp-toolbar-left icon="back" title="Settings"></rapp-toolbar-left>
                </rapp-toolbar>

                <rapp-content>
                    <button mat-button (click)="openSettings1()" color="primary">
                        Go to settings 1 (child from this page)
                    </button>
                    <br />
                    <button mat-button (click)="openSettings2()" color="primary">
                        Go to settings 2 (sibling from this page)
                    </button>
                </rapp-content>
            </rapp-view>
        </rapp-modal-view>

        <router-outlet></router-outlet>
    `,
})
export class SettingsComponent {
    constructor(private router: Router) {
        console.log('SettingsComponent - constructor');
    }

    openSettings1() {
        this.router.navigate(['home', 'settings', 'settings1']);
    }

    openSettings2() {
        this.router.navigate(['home', 'settings2']);
    }
}
