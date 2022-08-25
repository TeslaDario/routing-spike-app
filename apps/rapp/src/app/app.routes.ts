import { RouterModule } from '@angular/router';
import { CanDeactivatePageGuard } from '@rapp/layout';
import { CreatePostComponent, EditPostComponent } from '@rapp/post-feed';
import { MediaPreviewComponent } from '@rapp/shared';

export const AppRoutes = RouterModule.forRoot([
    {
        path: 'home',
        loadChildren: () => import('@rapp/home-feature').then((m) => m.HomeFeatureModule),
    },
    {
        path: 'newsfeed',
        loadChildren: () => import('@rapp/newsfeed').then((m) => m.NewsfeedModule),
    },
    {
        path: 'activities',
        loadChildren: () => import('@rapp/activities-feature').then((m) => m.ActivitiesFeatureModule),
    },
    {
        path: 'groups',
        loadChildren: () => import('@rapp/groups').then((m) => m.GroupsModule),
    },
    {
        path: 'messages',
        loadChildren: () => import('@rapp/chat').then((m) => m.ChatModule),
    },
    {
        path: 'tasks',
        loadChildren: () => import('@rapp/tasks').then((m) => m.TasksModule),
    },
    {
        path: 'users',
        outlet: 'users',
        loadChildren: () => import('@rapp/users').then((m) => m.UsersModule),
    },
    {
        path: 'media/:id',
        outlet: 'media',
        component: MediaPreviewComponent,
    },
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
    { path: '**', redirectTo: 'newsfeed', pathMatch: 'full' },
]);
