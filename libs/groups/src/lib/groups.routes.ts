import { RouterModule } from '@angular/router';
import { DialogGuard, PostRouteComponent } from '@rapp/shared';
import { GroupInfoCopyComponent } from './components/group-info/group-info.component-copy';
import { GroupOverviewComponent } from './components/group-overview/group-overview.component';
import { GroupsComponent } from './groups.component';

export const GroupsRoutes = RouterModule.forChild([
    { path: ':groupId/post/:postId', component: PostRouteComponent },
    // {
    //     path: 'group-info',
    //     outlet: 'dialog',
    //     canDeactivate: [DialogGuard],
    //     component: GroupInfoComponent,
    // },
    {
        path: 'group-info-copy',
        outlet: 'dialog',
        canDeactivate: [DialogGuard],
        component: GroupInfoCopyComponent,
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
