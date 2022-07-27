import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MOCK_GROUPS } from '../../../mocks';
import { MOCK_USERS } from '../../../mocks/users.mock';
import { Group, Post, User } from '../../../models';

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
        this.router.navigate([{ outlets: { dialog: ['users', this.author?.id] } }]);
    }
}
