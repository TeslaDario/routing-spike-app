import { Component, Input } from '@angular/core';
import { Post } from './post.model';

@Component({
    selector: 'rapp-post',
    templateUrl: 'post.component.html',
    styleUrls: ['post.component.scss'],
})
export class PostComponent {
    @Input() post!: Post;
    @Input() inFeed = true;
}
