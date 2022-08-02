import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@rapp/core';
import { LayoutModule } from '@rapp/layout';
import { ActivitiesComponent } from './activities.component';
import { ActivitiesRoutes } from './activities.routes';

@NgModule({
    imports: [CommonModule, ActivitiesRoutes, MaterialModule, LayoutModule],
    declarations: [ActivitiesComponent],
})
export class ActivitiesModule {}
