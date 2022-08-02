import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Group, MOCK_GROUPS, MOCK_USERS, Post, User } from '@rapp/store';

@Component({
    selector: 'rapp-post',
    templateUrl: 'post.component.html',
    styleUrls: ['post.component.scss'],
})
export class PostComponent {
    private _post!: Post;
    @Input() set post(p: Post) {
        this._post = p;
        if (p.id) {
            this.group = MOCK_GROUPS.find((g) => g.id === p.groupId);
            this.author = MOCK_USERS.find((u) => u.id === p.userId);
        }
    }
    get post(): Post {
        return this._post;
    }
    @Input() inFeed = true;
    group: Group | undefined;
    author!: User | undefined;

    constructor(private router: Router) {}

    openProfile() {
        this.router.navigate([{ outlets: { users: ['users', this.author?.id] } }]);
    }

    openMedia() {
        this.router.navigate([{ outlets: { media: ['media', 1] } }]);
    }
}
