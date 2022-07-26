import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { AvatarModule } from '../avatar/avatar.module';
import { PostFeedComponent } from './post-feed.component';
import { PostRouteComponent } from './post-route/post-route.component';
import { PostComponent } from './post/post.component';

@NgModule({
    imports: [CommonModule, RouterModule, MaterialModule, AvatarModule],
    declarations: [PostFeedComponent, PostComponent, PostRouteComponent],
    exports: [PostFeedComponent, PostComponent, PostRouteComponent],
})
export class PostFeedModule {}
