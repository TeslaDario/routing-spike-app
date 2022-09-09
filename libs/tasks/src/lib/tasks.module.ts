import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@rapp/layout';
import { FloatingActionButtonModule, MaterialModule, SearchInputModule } from '@rapp/ui';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TasksOverviewComponent } from './components/tasks-overview/tasks-overview.component';
import { TasksComponent } from './tasks.component';
import { TasksRoutes } from './tasks.routes';

@NgModule({
    declarations: [TasksComponent, TasksListComponent, TasksOverviewComponent, CreateTaskComponent],
    imports: [CommonModule, TasksRoutes, MaterialModule, LayoutModule, SearchInputModule, FloatingActionButtonModule],
})
export class TasksModule {}
