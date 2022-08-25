import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@rapp/layout';
import { AvatarModule, MaterialModule } from '@rapp/ui';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostFeedComponent } from './post-feed.component';
import { PostRouteComponent } from './post-route/post-route.component';
import { PostComponent } from './post/post.component';
import { ScheduleDialogComponent } from './schedule/schedule-dialog.component';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, MaterialModule, LayoutModule, AvatarModule],
    declarations: [
        PostFeedComponent,
        PostComponent,
        PostRouteComponent,
        CreatePostComponent,
        EditPostComponent,
        ScheduleDialogComponent,
    ],
    exports: [PostFeedComponent, PostComponent, PostRouteComponent],
})
export class PostFeedModule {}
