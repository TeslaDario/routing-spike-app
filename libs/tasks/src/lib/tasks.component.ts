import { Component } from '@angular/core';

@Component({
    selector: 'rapp-tasks',
    template: `
        <rapp-combined-view>
            <rapp-tasks-list></rapp-tasks-list>
        </rapp-combined-view>
    `,
})
export class TasksComponent {}
