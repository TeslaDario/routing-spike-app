import { Component, Input } from '@angular/core';
import { Post } from '@rapp/store';

@Component({
    selector: 'rapp-post-feed',
    templateUrl: 'post-feed.component.html',
})
export class PostFeedComponent {
    @Input() posts: Post[] = [];
}
