import { Component, Input } from '@angular/core';
import { Post } from '@rapp/store';

@Component({
    selector: 'rapp-post-feed',
    template: `
        <rapp-center-content class="container">
            <ng-content></ng-content>
            <rapp-post *ngFor="let post of posts" [post]="post"></rapp-post>
        </rapp-center-content>
    `,
})
export class PostFeedComponent {
    @Input() posts: Post[] = [];
}
