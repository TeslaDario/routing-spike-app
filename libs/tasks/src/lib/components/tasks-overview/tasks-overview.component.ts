import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MOCK_TASKS, StoreFacade, Task } from '@rapp/store';
import { Subscription } from 'rxjs';

@Component({
    selector: 'rapp-tasks-overview',
    templateUrl: 'tasks-overview.component.html',
})
export class TasksOverviewComponent implements OnDestroy {
    task!: Task | undefined;
    taskId!: Task['id'];
    layoutMode$ = this.storeFacade.getMode();
    private sub: Subscription;

    constructor(private route: ActivatedRoute, private storeFacade: StoreFacade) {
        this.sub = this.route.params.subscribe((params) => {
            this.taskId = params['taskId'];

            this.task = MOCK_TASKS.find((p) => p.id === this.taskId);
        });
    }

    addTask() {
        alert('TODO: should open add tasks modal');
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}
