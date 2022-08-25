import { Component } from '@angular/core';

@Component({
    selector: 'rapp-settings2',
    template: `
        <rapp-modal-page>
            <rapp-page>
                <rapp-toolbar>
                    <rapp-toolbar-left icon="back" title="Settings 2"></rapp-toolbar-left>
                </rapp-toolbar>

                <rapp-content> </rapp-content>
            </rapp-page>
        </rapp-modal-page>
    `,
})
export class Settings2Component {
    constructor() {
        console.log('Settings2Component - constructor');
    }
}
