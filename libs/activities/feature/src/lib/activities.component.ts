import { Component } from '@angular/core';

@Component({
    selector: 'rapp-activities',
    template: `
        <rapp-view [showBottomNavbar]="true">
            <rapp-toolbar>
                <rapp-toolbar-left icon="back" title="Activities"></rapp-toolbar-left>
            </rapp-toolbar>

            <rapp-content>
                <rapp-activities-items></rapp-activities-items>
            </rapp-content>
        </rapp-view>
    `,
})
export class ActivitiesComponent {}
