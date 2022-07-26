import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@rapp/layout';
import { AvatarModule, MaterialModule, PostFeedModule } from '@rapp/shared';
import { GroupListComponent } from './components/group-list/group-list.component';
import { GroupOverviewComponent } from './components/group-overview/group-overview.component';
import { GroupsComponent } from './groups.component';
import { GroupsRoutes } from './groups.routes';

@NgModule({
    declarations: [GroupsComponent, GroupListComponent, GroupOverviewComponent],
    imports: [CommonModule, GroupsRoutes, MaterialModule, LayoutModule, AvatarModule, PostFeedModule],
})
export class GroupsModule {}
