import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@rapp/layout';
import { PostFeedModule } from '@rapp/post-feed';
import { AvatarModule, FloatingActionButtonModule, MaterialModule, SearchInputModule } from '@rapp/ui';
import { GroupInfoModalComponent } from './components/group-info/group-info-modal.component';
import { GroupInfoComponent } from './components/group-info/group-info.component';
import { GroupListComponent } from './components/group-list/group-list.component';
import { GroupMembersComponent } from './components/group-members/group-members.component';
import { GroupOverviewComponent } from './components/group-overview/group-overview.component';
import { GroupsComponent } from './groups.component';

@NgModule({
    declarations: [
        GroupsComponent,
        GroupListComponent,
        GroupOverviewComponent,
        GroupInfoComponent,
        GroupInfoModalComponent,
        GroupMembersComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        MaterialModule,
        LayoutModule,
        AvatarModule,
        SearchInputModule,
        PostFeedModule,
        FloatingActionButtonModule,
    ],
    exports: [GroupListComponent, GroupInfoComponent],
})
export class GroupsModule {}
