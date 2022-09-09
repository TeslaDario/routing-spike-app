import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CanDeactivatePage } from '@rapp/layout';
import { DialogService, UploadService } from '@rapp/shared';
import { MOCK_POSTS, Post } from '@rapp/store';
import { map, Observable, of, Subject, takeUntil } from 'rxjs';
import { ScheduleDialogComponent } from '../schedule/schedule-dialog.component';

@Component({
    selector: 'rapp-edit-post',
    template: `
        <rapp-modal-view>
            <rapp-view>
                <rapp-toolbar>
                    <rapp-toolbar-left icon="back" title="Edit post"></rapp-toolbar-left>
                </rapp-toolbar>

                <rapp-content>
                    <div class="container">
                        <div>
                            <input type="text" placeholder="Title" style="width: 100%" [ngModel]="post?.title" />
                        </div>
                        <div>
                            <textarea
                                rows="5"
                                placeholder="Body"
                                style="width: 100%;"
                                [ngModel]="post?.body"
                            ></textarea>
                        </div>
                        <br />
                        <div>
                            <p>
                                Some Data From MatDialog:
                                <span style="color: red">
                                    {{ someDataFromMatDialog }}
                                </span>
                            </p>
                            <button mat-flat-button (click)="openDialog()" color="accent">
                                Schedule (open Mat dialog)
                            </button>
                        </div>
                        <br /><br />
                        <div class="flex flex-wrap">
                            <img *ngFor="let image of images" [src]="image" />
                        </div>
                        <button mat-flat-button (click)="addImage()" color="primary">Add image</button>
                    </div>
                </rapp-content>
            </rapp-view>
        </rapp-modal-view>
    `,
    providers: [UploadService],
})
export class EditPostComponent implements OnDestroy, CanDeactivatePage {
    post!: Post | undefined;
    images: string[] = [];
    someDataFromMatDialog!: string;
    private destroyed$ = new Subject();

    canDeactivatePage: () => Observable<boolean> = () => {
        if (this.images.length !== 0) {
            return this.dialogService
                .confirm$({
                    titleText: 'Warning!',
                    contentText: 'Leaving this view you will lose your uploads!!!',
                    confirmButtonText: 'Leave',
                    type: 'warn',
                })
                .pipe(map(Boolean));
        }
        return of(true);
    };

    constructor(
        private route: ActivatedRoute,
        private dialogService: DialogService,
        private uploadService: UploadService
    ) {
        console.log('EditPostComponent - constructor');
        this.route.params.pipe(takeUntil(this.destroyed$)).subscribe((params) => {
            this.post = MOCK_POSTS.find((post) => post.id === params['postId']);
        });
        this.uploadService
            .getUploads$()
            .pipe(takeUntil(this.destroyed$))
            .subscribe((uploads) => {
                this.images = uploads;
            });
    }

    addImage() {
        this.uploadService.addUpload();
    }

    openDialog() {
        this.dialogService
            .fullscreen(ScheduleDialogComponent)
            .afterClosed()
            .subscribe((result) => (this.someDataFromMatDialog = result));
    }

    ngOnDestroy(): void {
        this.destroyed$.complete();
    }
}
