import { Component } from '@angular/core';

@Component({
    selector: 'rapp-settings1',
    template: `
        <rapp-modal-view>
            <rapp-view>
                <rapp-toolbar>
                    <rapp-toolbar-left icon="back" title="Settings1"></rapp-toolbar-left>
                </rapp-toolbar>

                <rapp-content> </rapp-content>
            </rapp-view>
        </rapp-modal-view>

        <router-outlet></router-outlet>
    `,
})
export class Settings1Component {
    constructor() {
        console.log('Settings1Component - constructor');
    }
}
