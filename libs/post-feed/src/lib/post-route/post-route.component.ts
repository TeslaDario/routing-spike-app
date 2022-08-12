import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MOCK_POSTS, Post } from '@rapp/store';

@Component({
    selector: 'rapp-post-route',
    template: `
        <rapp-modal-page [fullPage]="true">
            <rapp-page>
                <rapp-toolbar>
                    <rapp-toolbar-left icon="back" title="Post"></rapp-toolbar-left>
                </rapp-toolbar>

                <rapp-content>
                    <rapp-post [post]="post" [inFeed]="false"></rapp-post>
                </rapp-content>
            </rapp-page>
        </rapp-modal-page>
    `,
})
export class PostRouteComponent {
    @Input() post: Post = MOCK_POSTS[1];

    constructor(private route: ActivatedRoute) {
        console.log(this.route.snapshot);
    }
}
