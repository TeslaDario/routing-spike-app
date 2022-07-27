import { RouterModule } from '@angular/router';
import { ActorComponent } from './actor.component';
import { ProfileComponent } from './profile.component';

export const UserRoutes = RouterModule.forChild([
    {
        path: 'me',
        component: ActorComponent,
    },
    {
        path: ':userId',
        component: ProfileComponent,
    },
]);
