import { RouterModule } from '@angular/router';
import { DialogComponent } from '@rapp/shared';
import { NewsfeedComponent } from './newsfeed.component';

export const NewsfeedRoutes = RouterModule.forChild([
    {
        path: 'activities',
        outlet: 'dialog',
        component: DialogComponent,
    },
    { path: '', component: NewsfeedComponent },
]);
