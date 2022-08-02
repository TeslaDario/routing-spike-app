import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@rapp/core';
import { LayoutModule } from '@rapp/layout';
import { AvatarModule } from '@rapp/shared';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostFeedComponent } from './post-feed.component';
import { PostRouteComponent } from './post-route/post-route.component';
import { PostComponent } from './post/post.component';

@NgModule({
    imports: [CommonModule, RouterModule, MaterialModule, LayoutModule, AvatarModule],
    declarations: [PostFeedComponent, PostComponent, PostRouteComponent, CreatePostComponent],
    exports: [PostFeedComponent, PostComponent, PostRouteComponent],
})
export class PostFeedModule {}
