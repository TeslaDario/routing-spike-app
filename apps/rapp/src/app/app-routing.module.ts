import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgWelcomeComponent } from './ng-welcome.component';
import { NxWelcomeComponent } from './nx-welcome.component';

const routes: Routes = [
    { path: 'ng', component: NgWelcomeComponent },
    { path: 'nx', component: NxWelcomeComponent },
    {
        path: 'home',
        loadChildren: () => import('@rapp/home').then((m) => m.HomeModule),
    },
    {
        path: 'newsfeed',
        loadChildren: () => import('@rapp/newsfeed').then((m) => m.NewsfeedModule),
    },
    {
        path: 'groups',
        loadChildren: () => import('@rapp/groups').then((m) => m.GroupsModule),
    },
    {
        path: 'chat',
        loadChildren: () => import('@rapp/chat').then((m) => m.ChatModule),
    },
    { path: '**', redirectTo: 'newsfeed', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
