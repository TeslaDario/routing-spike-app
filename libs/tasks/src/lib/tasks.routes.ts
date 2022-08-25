import { RouterModule } from '@angular/router';
import { TasksOverviewComponent } from './components/tasks-overview/tasks-overview.component';
import { TasksComponent } from './tasks.component';

export const TasksRoutes = RouterModule.forChild([
    {
        path: '',
        component: TasksComponent,
        children: [
            {
                path: ':taskId',
                component: TasksOverviewComponent,
            },
        ],
    },
]);
