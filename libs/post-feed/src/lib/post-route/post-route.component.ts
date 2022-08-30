import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MOCK_POSTS, Post } from '@rapp/store';

@Component({
    selector: 'rapp-post-route',
    template: `
        <rapp-modal-view mode="full">
            <rapp-view>
                <rapp-toolbar>
                    <rapp-toolbar-left icon="back" title="Post"></rapp-toolbar-left>
                </rapp-toolbar>

                <rapp-content>
                    <rapp-center-content size="big">
                        <rapp-post [post]="post" [inFeed]="false"></rapp-post>
                    </rapp-center-content>
                </rapp-content>
            </rapp-view>
        </rapp-modal-view>
    `,
})
export class PostRouteComponent {
    @Input() post: Post = MOCK_POSTS[1];

    constructor(private route: ActivatedRoute) {
        console.log(this.route.snapshot);
    }
}
