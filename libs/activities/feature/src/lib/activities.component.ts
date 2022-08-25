import { Component } from '@angular/core';

@Component({
    selector: 'rapp-activities',
    template: `
        <rapp-page [showBottomNavbar]="true">
            <rapp-toolbar>
                <rapp-toolbar-left icon="back" title="Activities"></rapp-toolbar-left>
            </rapp-toolbar>

            <rapp-content>
                <rapp-activities-items></rapp-activities-items>
            </rapp-content>
        </rapp-page>
    `,
})
export class ActivitiesComponent {}
