import { Component } from '@angular/core';

@Component({
    selector: 'rapp-settings2',
    template: `
        <rapp-modal-view>
            <rapp-view>
                <rapp-toolbar>
                    <rapp-toolbar-left icon="back" title="Settings 2"></rapp-toolbar-left>
                </rapp-toolbar>

                <rapp-content> </rapp-content>
            </rapp-view>
        </rapp-modal-view>
    `,
})
export class Settings2Component {
    constructor() {
        console.log('Settings2Component - constructor');
    }
}
