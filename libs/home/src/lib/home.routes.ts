import { RouterModule } from '@angular/router';
import { SettingsComponent } from './components/settings.component';
import { Settings1Component } from './components/settings1.component';
import { Settings2Component } from './components/settings2.component';
import { HomeComponent } from './home.component';

export const HomeRoutes = RouterModule.forChild([
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'settings',
                component: SettingsComponent,
                children: [
                    {
                        path: 'settings1',
                        component: Settings1Component,
                    },
                ],
            },
            {
                path: 'settings2',
                component: Settings2Component,
            },
        ],
    },
]);
