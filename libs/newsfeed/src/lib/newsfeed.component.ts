import { Component } from '@angular/core';
import { MOCK_POSTS, Post } from '@rapp/store';

@Component({
    selector: 'rapp-newsfeed',
    template: `
        <rapp-combined-view>
            <rapp-group-list></rapp-group-list>
        </rapp-combined-view>
    `,
})
export class NewsfeedComponent {
    posts: Post[] = MOCK_POSTS;
}
