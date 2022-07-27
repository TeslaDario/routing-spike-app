import { RouterModule } from '@angular/router';
import { DialogComponent } from '@rapp/shared';
import { HomeComponent } from './home.component';

export const HomeRoutes = RouterModule.forChild([
    {
        path: 'settings',
        outlet: 'dialog',
        component: DialogComponent,
    },
    { path: '', component: HomeComponent },
]);
