import { RouterModule } from '@angular/router';
import { GroupListComponent, GroupMembersComponent, GroupOverviewComponent } from '@rapp/groups';
import { PostRouteComponent } from '@rapp/post-feed';
import { GroupInfoModalComponent } from 'libs/groups/src/lib/components/group-info/group-info-modal.component';
import { NewsfeedOverviewComponent } from './components/newsfeed-overview/newsfeed-overview.component';
import { ScheduledNewsfeedOverviewComponent } from './components/scheduled-newsfeed-overview/scheduled-newsfeed-overview.component';
import { SearchComponent } from './components/search.component';
import { NewsfeedComponent } from './newsfeed.component';

export const NewsfeedRoutes = RouterModule.forChild([
    { path: 'search', outlet: 'modal', component: SearchComponent },
    {
        path: '',
        component: NewsfeedComponent,
        children: [
            { path: '', component: NewsfeedOverviewComponent, pathMatch: 'full' },
            { path: 'scheduled', component: ScheduledNewsfeedOverviewComponent },
            { path: 'groups', component: GroupListComponent },
            { path: ':groupId/post/:postId', component: PostRouteComponent },

            {
                path: ':groupId',
                component: GroupOverviewComponent,
                children: [
                    {
                        path: 'info',
                        component: GroupInfoModalComponent,
                    },
                    {
                        path: 'info/members',
                        component: GroupMembersComponent,
                    },
                ],
            },
            { path: '**', redirectTo: '' },
        ],
    },
]);
