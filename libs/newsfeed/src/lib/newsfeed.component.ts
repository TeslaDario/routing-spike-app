import { Component } from '@angular/core';
import { MOCK_POSTS, Post } from '@rapp/shared';

@Component({
    selector: 'rapp-newsfeed',
    templateUrl: 'newsfeed.component.html',
    styleUrls: ['newsfeed.component.scss'],
})
export class NewsfeedComponent {
    posts: Post[] = MOCK_POSTS;
}
