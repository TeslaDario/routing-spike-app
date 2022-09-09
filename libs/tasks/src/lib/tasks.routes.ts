import { RouterModule } from '@angular/router';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { TasksOverviewComponent } from './components/tasks-overview/tasks-overview.component';
import { TasksComponent } from './tasks.component';

export const TasksRoutes = RouterModule.forChild([
    {
        path: '',
        component: TasksComponent,
        children: [
            {
                path: 'create',
                component: CreateTaskComponent,
            },
            {
                path: ':taskId',
                component: TasksOverviewComponent,
            },
        ],
    },
]);
