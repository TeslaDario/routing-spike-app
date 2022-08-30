import { Component } from '@angular/core';

@Component({
    selector: 'rapp-scheduled-newsfeed-overview',
    template: `
        <rapp-view>
            <rapp-toolbar>
                <rapp-toolbar-left icon="back" title="Scheduled"></rapp-toolbar-left>
            </rapp-toolbar>

            <rapp-content> NO SCHEDULED CONTENT </rapp-content>
        </rapp-view>
    `,
})
export class ScheduledNewsfeedOverviewComponent {}
