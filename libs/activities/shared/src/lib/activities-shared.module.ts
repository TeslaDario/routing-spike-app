import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@rapp/ui';
import { ActivitiesItemsComponent } from './activities-items.component';

@NgModule({
    imports: [CommonModule, MaterialModule],
    declarations: [ActivitiesItemsComponent],
    exports: [ActivitiesItemsComponent],
})
export class ActivitiesSharedModule {}
