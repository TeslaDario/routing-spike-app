import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'rapp-settings',
    template: `
        <rapp-modal>
            <rapp-page>
                <rapp-toolbar>
                    <rapp-toolbar-left>
                        <button mat-icon-button rapp-modal-close color="primary">
                            <mat-icon>arrow_back</mat-icon>
                        </button>
                        <p class="mb-0 ml-4">Settings</p>
                    </rapp-toolbar-left>
                </rapp-toolbar>

                <rapp-content>
                    <button mat-button (click)="openSettings2()" color="primary">Go to seetings 2</button>
                </rapp-content>
            </rapp-page>
        </rapp-modal>
    `,
})
export class SettingsComponent {
    constructor(private router: Router) {
        console.log('SettingsComponent - constructor');
    }

    openSettings2() {
        this.router.navigate(['home', { outlets: { modal: ['settings2'] } }]);
    }
}
