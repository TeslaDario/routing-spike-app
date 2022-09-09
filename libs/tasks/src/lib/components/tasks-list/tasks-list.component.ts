import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MOCK_TASKS, StoreFacade, Task } from '@rapp/store';

@Component({
    selector: 'rapp-tasks-list',
    templateUrl: 'tasks-list.component.html',
    styleUrls: ['tasks-list.component.scss'],
})
export class TasksListComponent {
    tasks: Task[] = MOCK_TASKS;
    readonly layoutMode$ = this.storeFacade.getMode();

    constructor(private router: Router, private storeFacade: StoreFacade) {}

    addTask() {
        this.router.navigate(['tasks', 'create']);
    }
}
