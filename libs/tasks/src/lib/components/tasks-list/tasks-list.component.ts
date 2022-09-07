import { Component } from '@angular/core';
import { MOCK_TASKS, StoreFacade, Task } from '@rapp/store';

@Component({
    selector: 'rapp-tasks-list',
    templateUrl: 'tasks-list.component.html',
    styleUrls: ['tasks-list.component.scss'],
})
export class TasksListComponent {
    tasks: Task[] = MOCK_TASKS;
    readonly layoutMode$ = this.storeFacade.getMode();

    constructor(private storeFacade: StoreFacade) {}

    addTask() {
        alert('TODO: should open add tasks modal');
    }
}
