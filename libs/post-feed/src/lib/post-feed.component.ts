import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '@rapp/store';

@Component({
    selector: 'rapp-post-feed',
    templateUrl: 'post-feed.component.html',
    styleUrls: ['post-feed.component.scss'],
})
export class PostFeedComponent {
    @Input() posts: Post[] = [];

    constructor(private router: Router) {}

    addPost() {
        this.router.navigate([{ outlets: { dialog: ['create-post'] } }]);
    }
}
