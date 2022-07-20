import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@rapp/layout';
import { GroupsComponent } from './groups.component';
import { GroupsRoutes } from './groups.routes';

@NgModule({
    declarations: [GroupsComponent],
    imports: [CommonModule, GroupsRoutes, LayoutModule],
})
export class GroupsModule {}
