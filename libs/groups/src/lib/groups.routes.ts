import { RouterModule } from '@angular/router';
import { PostRouteComponent } from '@rapp/post-feed';
import { ModalGuard } from '@rapp/shared';
import { GroupInfoComponent } from './components/group-info/group-info.component';
import { GroupMembersComponent } from './components/group-members/group-members.component';
import { GroupOverviewComponent } from './components/group-overview/group-overview.component';
import { GroupsComponent } from './groups.component';

export const GroupsRoutes = RouterModule.forChild([
    { path: ':groupId/post/:postId', component: PostRouteComponent },
    {
        path: 'info',
        outlet: 'modal',
        canDeactivate: [ModalGuard],
        component: GroupInfoComponent,
    },
    {
        path: 'members',
        outlet: 'modal',
        canDeactivate: [ModalGuard],
        component: GroupMembersComponent,
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
