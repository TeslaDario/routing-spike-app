import { RouterModule } from '@angular/router';
import { GroupInfoComponent, GroupListComponent, GroupMembersComponent, GroupOverviewComponent } from '@rapp/groups';
import { CanDeactivatePageGuard } from '@rapp/layout';
import { CreatePostComponent, EditPostComponent, PostRouteComponent } from '@rapp/post-feed';
import { NewsfeedOverviewComponent } from './components/newsfeed-overview/newsfeed-overview.component';
import { ScheduledNewsfeedOverviewComponent } from './components/scheduled-newsfeed-overview/scheduled-newsfeed-overview.component';
import { SearchComponent } from './components/search.component';
import { NewsfeedComponent } from './newsfeed.component';

export const NewsfeedRoutes = RouterModule.forChild([
    { path: 'search', outlet: 'modal', component: SearchComponent },
    {
        path: 'create-post',
        outlet: 'modal',
        canDeactivate: [CanDeactivatePageGuard],
        component: CreatePostComponent,
    },
    {
        path: 'edit-post/:postId',
        outlet: 'modal',
        canDeactivate: [CanDeactivatePageGuard],
        component: EditPostComponent,
    },

    {
        path: '',
        component: NewsfeedComponent,
        children: [
            { path: '', component: NewsfeedOverviewComponent, pathMatch: 'full' },
            { path: 'groups', component: GroupListComponent },
            { path: 'scheduled', component: ScheduledNewsfeedOverviewComponent },
            { path: ':groupId/post/:postId', component: PostRouteComponent },

            {
                path: ':groupId',
                component: GroupOverviewComponent,
                children: [
                    {
                        path: 'info',
                        component: GroupInfoComponent,
                        children: [{ path: 'members', component: GroupMembersComponent }],
                    },
                    { path: 'members', component: GroupMembersComponent },
                ],
            },

            { path: '**', redirectTo: '' },
        ],
    },
]);
