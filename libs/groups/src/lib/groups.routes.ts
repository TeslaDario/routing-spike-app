import { RouterModule } from '@angular/router';
import { DialogGuard, PostRouteComponent } from '@rapp/shared';
import { GroupInfoComponent } from './components/group-info/group-info.component';
import { GroupOverviewComponent } from './components/group-overview/group-overview.component';
import { GroupsComponent } from './groups.component';

export const GroupsRoutes = RouterModule.forChild([
    { path: ':groupId/post/:postId', component: PostRouteComponent },
    {
        path: 'group-info',
        outlet: 'dialog',
        canDeactivate: [DialogGuard],
        component: GroupInfoComponent,
    },
    {
        path: '',
        component: GroupsComponent,
        children: [
            {
                path: ':groupId',
                component: GroupOverviewComponent,
            },
        ],
    },
]);
