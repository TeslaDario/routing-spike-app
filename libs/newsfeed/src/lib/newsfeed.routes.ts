import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/search.component';
import { NewsfeedComponent } from './newsfeed.component';

export const NewsfeedRoutes = RouterModule.forChild([
    {
        path: 'search',
        outlet: 'modal',
        component: SearchComponent,
    },
    { path: '', component: NewsfeedComponent },
]);
