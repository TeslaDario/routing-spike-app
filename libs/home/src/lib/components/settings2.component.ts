import { Component } from '@angular/core';

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
                        <p class="mb-0 ml-4">Settings 2</p>
                    </rapp-toolbar-left>
                </rapp-toolbar>

                <rapp-content> </rapp-content>
            </rapp-page>
        </rapp-modal>
    `,
})
export class Settings2Component {
    constructor() {
        console.log('Settings2Component - constructor');
    }
}
