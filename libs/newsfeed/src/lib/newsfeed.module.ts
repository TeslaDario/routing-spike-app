import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GroupsModule } from '@rapp/groups';
import { LayoutModule } from '@rapp/layout';
import { PostFeedModule } from '@rapp/post-feed';
import { SharedComponentsModule } from '@rapp/shared';
import { AvatarModule, FloatingActionButtonModule, ItemModule, MaterialModule, SearchInputModule } from '@rapp/ui';
import { NewsfeedAsideComponent } from './components/newsfeed-aside.component';
import { NewsfeedOverviewComponent } from './components/newsfeed-overview/newsfeed-overview.component';
import { ScheduledNewsfeedOverviewComponent } from './components/scheduled-newsfeed-overview/scheduled-newsfeed-overview.component';
import { SearchComponent } from './components/search.component';
import { NewsfeedComponent } from './newsfeed.component';
import { NewsfeedRoutes } from './newsfeed.routes';

@NgModule({
    declarations: [
        NewsfeedComponent,
        NewsfeedOverviewComponent,
        ScheduledNewsfeedOverviewComponent,
        NewsfeedAsideComponent,
        SearchComponent,
    ],
    imports: [
        CommonModule,
        NewsfeedRoutes,
        MaterialModule,
        LayoutModule,
        GroupsModule,
        PostFeedModule,
        AvatarModule,
        SearchInputModule,
        FloatingActionButtonModule,
        ItemModule,
        SharedComponentsModule,
    ],
})
export class NewsfeedModule {}
