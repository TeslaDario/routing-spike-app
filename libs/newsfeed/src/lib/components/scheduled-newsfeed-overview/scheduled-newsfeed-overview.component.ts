import { Component } from '@angular/core';

@Component({
    selector: 'rapp-scheduled-newsfeed-overview',
    template: `
        <rapp-page>
            <rapp-toolbar>
                <rapp-toolbar-left icon="back" title="Scheduled"></rapp-toolbar-left>
            </rapp-toolbar>

            <rapp-content> NO SCHEDULED CONTENT </rapp-content>
        </rapp-page>
    `,
})
export class ScheduledNewsfeedOverviewComponent {}
