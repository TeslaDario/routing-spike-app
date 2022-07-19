import { Component, Input } from '@angular/core';
import { MOCK_POSTS } from '../post-feed.mock';
import { Post } from '../post/post.model';

@Component({
    selector: 'rapp-post-route',
    templateUrl: 'post-route.component.html',
})
export class PostRouteComponent {
    @Input() post: Post = MOCK_POSTS[1];
}
