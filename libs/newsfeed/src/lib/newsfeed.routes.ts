import { RouterModule } from '@angular/router';
import { DialogGuard } from '@rapp/shared';
import { SearchComponent } from './components/search.component';
import { NewsfeedComponent } from './newsfeed.component';

export const NewsfeedRoutes = RouterModule.forChild([
    {
        path: 'search',
        outlet: 'dialog',
        canDeactivate: [DialogGuard],
        component: SearchComponent,
    },
    { path: '', component: NewsfeedComponent },
]);
