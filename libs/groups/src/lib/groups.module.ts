import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@rapp/core';
import { LayoutModule } from '@rapp/layout';
import { AvatarModule, PostFeedModule } from '@rapp/shared';
import { GroupInfoComponent } from './components/group-info/group-info.component';
import { GroupListComponent } from './components/group-list/group-list.component';
import { GroupMembersComponent } from './components/group-members/group-members.component';
import { GroupOverviewComponent } from './components/group-overview/group-overview.component';
import { GroupsComponent } from './groups.component';
import { GroupsRoutes } from './groups.routes';

@NgModule({
    declarations: [
        GroupsComponent,
        GroupListComponent,
        GroupOverviewComponent,
        GroupInfoComponent,
        GroupInfoComponent,
        GroupMembersComponent,
    ],
    imports: [CommonModule, GroupsRoutes, FormsModule, MaterialModule, LayoutModule, AvatarModule, PostFeedModule],
})
export class GroupsModule {}
