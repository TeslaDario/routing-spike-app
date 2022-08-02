import { RouterModule } from '@angular/router';
import { MediaDialogComponent } from '@rapp/layout';
import { DialogGuard } from '@rapp/shared';

export const AppRoutes = RouterModule.forRoot([
    {
        path: 'home',
        loadChildren: () => import('@rapp/home').then((m) => m.HomeModule),
    },
    {
        path: 'newsfeed',
        loadChildren: () => import('@rapp/newsfeed').then((m) => m.NewsfeedModule),
    },
    {
        path: 'activities',
        loadChildren: () => import('@rapp/activities').then((m) => m.ActivitiesModule),
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
        path: 'users',
        outlet: 'profile',
        canDeactivate: [DialogGuard],
        loadChildren: () => import('@rapp/users').then((m) => m.UsersModule),
    },
    {
        path: 'media/:id',
        outlet: 'media',
        // canDeactivate: [DialogGuard],
        component: MediaDialogComponent,
    },
    { path: '**', redirectTo: 'newsfeed', pathMatch: 'full' },
]);
