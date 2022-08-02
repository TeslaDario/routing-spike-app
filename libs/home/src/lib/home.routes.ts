import { RouterModule } from '@angular/router';
import { DialogGuard } from '@rapp/shared';
import { SettingsComponent } from './components/settings.component';
import { Settings2Component } from './components/settings2.component';
import { HomeComponent } from './home.component';

export const HomeRoutes = RouterModule.forChild([
    {
        path: 'settings',
        outlet: 'dialog',
        canDeactivate: [DialogGuard],
        component: SettingsComponent,
    },
    {
        path: 'settings2',
        outlet: 'dialog',
        canDeactivate: [DialogGuard],
        component: Settings2Component,
    },
    { path: '', component: HomeComponent },
]);
