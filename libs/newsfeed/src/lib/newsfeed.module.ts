import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@rapp/layout';
import { MaterialModule, PostFeedModule } from '@rapp/shared';
import { NewsfeedComponent } from './newsfeed.component';
import { NewsfeedRoutes } from './newsfeed.routes';

@NgModule({
    declarations: [NewsfeedComponent],
    imports: [CommonModule, NewsfeedRoutes, LayoutModule, MaterialModule, PostFeedModule],
})
export class NewsfeedModule {}
