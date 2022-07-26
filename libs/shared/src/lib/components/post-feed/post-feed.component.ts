import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Post } from '../../models';
import { DialogOneComponent } from '../dialog/dialog-one.component';

@Component({
    selector: 'rapp-post-feed',
    templateUrl: 'post-feed.component.html',
    styleUrls: ['post-feed.component.scss'],
})
export class PostFeedComponent {
    @Input() posts: Post[] = [];

    constructor(public dialog: MatDialog) {}

    addPost() {
        const dialogRef = this.dialog.open(DialogOneComponent, {
            width: '90vw',
            maxWidth: '90vw',
            height: '80vh',
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log('[POST] The dialog one was closed');
        });
    }
}
