import { Component } from '@angular/core';
import { CanDeactivatePage } from '@rapp/layout';
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
                </rapp-toolbar>

                <rapp-content>
                    <div class="container">
                        <div>
                            <input type="text" placeholder="Title" style="width: 100%" />
                        </div>
                        <div>
                            <textarea rows="5" placeholder="Body" style="width: 100%;"></textarea>
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
    images: string[] = [];
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

    constructor(private dialogService: DialogService, private uploadService: UploadService) {
        console.log('CreatePostComponent - constructor');
        this.uploadService.getUploads$().subscribe((uploads) => {
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
            .subscribe((result) => {
                console.log(result);
                this.someDataFromMatDialog = result;
            });
    }
}
