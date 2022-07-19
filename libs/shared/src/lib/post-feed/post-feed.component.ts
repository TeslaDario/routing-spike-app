import { Component, Input } from '@angular/core';
import { Post } from './post/post.model';

@Component({
    selector: 'rapp-post-feed',
    templateUrl: 'post-feed.component.html',
    styleUrls: ['post-feed.component.scss'],
})
export class PostFeedComponent {
    @Input() posts: Post[] = [];
}
