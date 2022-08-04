import { Component, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from '@rapp/layout';
import { CanDeactivateModal, DialogService, UploadService } from '@rapp/shared';
import { map, Observable, of, Subscription } from 'rxjs';

@Component({
    selector: 'rapp-create-post',
    template: `
        <rapp-modal>
            <rapp-page>
                <rapp-toolbar>
                    <rapp-toolbar-left>
                        <button mat-icon-button (click)="close()" color="primary">
                            <mat-icon>arrow_back</mat-icon>
                        </button>
                        <p class="mb-0 ml-4">Create post</p>
                    </rapp-toolbar-left>
                </rapp-toolbar>

                <rapp-content>
                    <div class="container">Create post</div>

                    <div class="flex flex-wrap">
                        <img *ngFor="let image of images" [src]="image" />
                    </div>
                    <button mat-flat-button (click)="addImage()" color="primary">Add image</button>
                </rapp-content>
            </rapp-page>
        </rapp-modal>
    `,
    providers: [UploadService],
})
export class CreatePostComponent implements CanDeactivateModal, OnDestroy {
    @ViewChild(ModalComponent) modal!: ModalComponent;
    images: string[] = [];
    private sub!: Subscription;

    canDeactivateModal: () => Observable<boolean> = () => {
        if (this.images.length !== 0) {
            return this.dialogService
                .confirm$(
                    {
                        titleText: 'Warning!',
                        contentText: 'Leaving this page you will lose your uploads!!!',
                        confirmButtonText: 'Leave',
                        type: 'warn',
                    },
                    { closeOnNavigation: true }
                )
                .pipe(map(Boolean));
        }
        return of(true);
    };

    constructor(private dialogService: DialogService, private router: Router, private uploadService: UploadService) {
        console.log('CreatePostComponent - constructor');
        this.uploadService.getUploads$().subscribe((uploads) => {
            this.images = uploads;
        });
    }

    addImage() {
        this.uploadService.addUpload();
    }

    close() {
        this.sub = this.canDeactivateModal().subscribe((can) => {
            if (can) {
                this.modal.close();
            }
        });
    }

    ngOnDestroy(): void {
        this.sub?.unsubscribe();
    }
}
