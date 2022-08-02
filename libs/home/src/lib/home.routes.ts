import { RouterModule } from '@angular/router';
import { ModalGuard } from '@rapp/shared';
import { SettingsComponent } from './components/settings.component';
import { Settings2Component } from './components/settings2.component';
import { HomeComponent } from './home.component';

export const HomeRoutes = RouterModule.forChild([
    {
        path: 'settings',
        outlet: 'modal',
        canDeactivate: [ModalGuard],
        component: SettingsComponent,
    },
    {
        path: 'settings2',
        outlet: 'modal',
        canDeactivate: [ModalGuard],
        component: Settings2Component,
    },
    { path: '', component: HomeComponent },
]);
