import { RouterModule } from '@angular/router';
import { CanActivateUserModalGuard } from '@rapp/layout';
import { MediaPreviewComponent } from '@rapp/shared';

export const AppRoutes = RouterModule.forRoot([
    {
        path: '',
        canActivate: [CanActivateUserModalGuard],
        children: [
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
            { path: '**', redirectTo: 'newsfeed', pathMatch: 'full' },
        ],
    },
]);
