import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@rapp/layout';
import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsComponent } from './groups.component';

@NgModule({
    declarations: [GroupsComponent],
    imports: [CommonModule, GroupsRoutingModule, LayoutModule],
})
export class GroupsModule {}
