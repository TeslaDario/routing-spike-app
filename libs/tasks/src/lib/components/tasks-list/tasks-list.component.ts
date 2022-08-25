import { Component } from '@angular/core';
import { MOCK_TASKS, Task } from '@rapp/store';

@Component({
    selector: 'rapp-tasks-list',
    templateUrl: 'tasks-list.component.html',
    styleUrls: ['tasks-list.component.scss'],
})
export class TasksListComponent {
    tasks: Task[] = MOCK_TASKS;
}
