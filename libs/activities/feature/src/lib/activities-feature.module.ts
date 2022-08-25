import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActivitiesSharedModule } from '@rapp/activities-shared';
import { LayoutModule } from '@rapp/layout';
import { MaterialModule } from '@rapp/ui';
import { ActivitiesComponent } from './activities.component';
import { ActivitiesRoutes } from './activities.routes';

@NgModule({
    imports: [CommonModule, ActivitiesRoutes, MaterialModule, LayoutModule, ActivitiesSharedModule],
    declarations: [ActivitiesComponent],
})
export class ActivitiesFeatureModule {}
