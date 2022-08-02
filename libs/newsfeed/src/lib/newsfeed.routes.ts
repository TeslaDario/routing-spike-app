import { RouterModule } from '@angular/router';
import { ModalGuard } from '@rapp/shared';
import { SearchComponent } from './components/search.component';
import { NewsfeedComponent } from './newsfeed.component';

export const NewsfeedRoutes = RouterModule.forChild([
    {
        path: 'search',
        outlet: 'modal',
        canDeactivate: [ModalGuard],
        component: SearchComponent,
    },
    { path: '', component: NewsfeedComponent },
]);
