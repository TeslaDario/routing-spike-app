import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@rapp/core';
import { LayoutModule } from '@rapp/layout';
import { PostFeedModule } from '@rapp/shared';
import { SearchComponent } from './components/search.component';
import { NewsfeedComponent } from './newsfeed.component';
import { NewsfeedRoutes } from './newsfeed.routes';

@NgModule({
    declarations: [NewsfeedComponent, SearchComponent],
    imports: [CommonModule, NewsfeedRoutes, LayoutModule, MaterialModule, PostFeedModule],
})
export class NewsfeedModule {}
