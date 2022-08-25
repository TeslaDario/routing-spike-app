import { Component } from '@angular/core';

@Component({
    selector: 'rapp-tasks',
    template: `
        <rapp-combined-page>
            <rapp-tasks-list></rapp-tasks-list>
        </rapp-combined-page>
    `,
})
export class TasksComponent {}
