import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@rapp/layout';
import { MaterialModule, PostFeedModule } from '@rapp/shared';
import { NewsfeedRoutingModule } from './newsfeed-routing.module';
import { NewsfeedComponent } from './newsfeed.component';

@NgModule({
    declarations: [NewsfeedComponent],
    imports: [CommonModule, NewsfeedRoutingModule, LayoutModule, MaterialModule, PostFeedModule],
})
export class NewsfeedModule {}
