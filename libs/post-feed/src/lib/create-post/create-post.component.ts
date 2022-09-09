import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanDeactivatePage, NavigationService } from '@rapp/layout';
import { DialogService, UploadService } from '@rapp/shared';
import { map, Observable, of } from 'rxjs';
import { ScheduleDialogComponent } from '../schedule/schedule-dialog.component';

@Component({
    selector: 'rapp-create-post',
    template: `
        <rapp-modal-view>
            <rapp-view>
                <rapp-toolbar>
                    <rapp-toolbar-left icon="back" title="Create post"></rapp-toolbar-left>
                    <rapp-toolbar-right>
                        <button mat-button (click)="save()" color="primary">{{ saveStatus }}</button>
                    </rapp-toolbar-right>
                </rapp-toolbar>

                <rapp-content>
                    <div class="container">
                        <div>
                            <input
                                type="text"
                                placeholder="Title"
                                style="width: 100%"
                                [(ngModel)]="title"
                                cdkFocusInitial
                            />
                        </div>
                        <div>
                            <textarea rows="5" placeholder="Body" style="width: 100%;" [(ngModel)]="body"></textarea>
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
export class CreatePostComponent implements CanDeactivatePage {
    title = '';
    body = '';
    images: string[] = [];
    saveStatus = 'Save';
    someDataFromMatDialog!: string;
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
        private dialogService: DialogService,
        private uploadService: UploadService,
        private navigationService: NavigationService,
        private _snackBar: MatSnackBar
    ) {
        console.log('CreatePostComponent - constructor');
        this.uploadService.getUploads$().subscribe((uploads) => {
            this.images = uploads;
        });
    }

    addImage() {
        this.uploadService.addUpload();
    }

    save() {
        if (this.title.trim() === '' || this.body.trim() === '') {
            this._snackBar.open('Fill title and body fields!!!', '', { duration: 2000, verticalPosition: 'top' });
            return;
        }

        this.saveStatus = 'Sending to BE';

        // EXAMPLE OF SAVE FLOW
        const timeout = 1000;
        if (this.images.length) {
            setTimeout(() => {
                // must be cleared to satisfy 'canDeactivatePage'
                this.images = [];
                this.saveStatus = 'Cleaning';
            }, timeout);
        }

        setTimeout(
            () => {
                this.navigationService.goBack();
                this._snackBar.open('POST SAVED!!!', 'OK', { duration: 2000, verticalPosition: 'top' });
            },
            this.images.length ? timeout * 2 : timeout
        );
    }

    openDialog() {
        this.dialogService
            .fullscreen(ScheduleDialogComponent)
            .afterClosed()
            .subscribe((result) => (this.someDataFromMatDialog = result));
    }
}
