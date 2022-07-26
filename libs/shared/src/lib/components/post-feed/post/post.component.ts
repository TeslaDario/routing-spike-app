import { Component, Input } from '@angular/core';
import { MOCK_GROUPS } from '../../../mocks';
import { Group, Post } from '../../../models';

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
        }
    }
    get post(): Post {
        return this._post;
    }
    @Input() inFeed = true;
    group: Group | undefined;
}
