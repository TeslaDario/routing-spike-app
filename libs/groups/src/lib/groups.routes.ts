import { RouterModule } from '@angular/router';
import { PostRouteComponent } from '@rapp/shared';
import { GroupOverviewComponent } from './components/group-overview/group-overview.component';
import { GroupsComponent } from './groups.component';

export const GroupsRoutes = RouterModule.forChild([
    { path: ':groupId/post/:postId', component: PostRouteComponent },
    // {
    //     path: ':groupId',
    //     component: GroupsComponent,
    // },
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
