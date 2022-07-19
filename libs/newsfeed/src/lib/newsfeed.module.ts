import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@rapp/layout';
import { NewsfeedRoutingModule } from './newsfeed-routing.module';
import { NewsfeedComponent } from './newsfeed.component';

@NgModule({
    declarations: [NewsfeedComponent],
    imports: [CommonModule, NewsfeedRoutingModule, LayoutModule],
})
export class NewsfeedModule {}
