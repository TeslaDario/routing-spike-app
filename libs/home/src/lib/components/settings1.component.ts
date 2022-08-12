import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'rapp-settings1',
    template: `
        <rapp-modal-page>
            <rapp-page>
                <rapp-toolbar>
                    <rapp-toolbar-left icon="back" title="Settings1"></rapp-toolbar-left>
                </rapp-toolbar>

                <rapp-content> </rapp-content>
            </rapp-page>
        </rapp-modal-page>
        <router-outlet></router-outlet>
    `,
})
export class Settings1Component {
    constructor(private router: Router) {
        console.log('Settings1Component - constructor');
    }
}
