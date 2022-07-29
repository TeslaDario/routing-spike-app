import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'rapp-media-dialog',
    template: `
        <ng-template #dialog>
            <div mat-dialog-title>
                <button mat-icon-button mat-dialog-close="back" color="primary">
                    <mat-icon>arrow_back</mat-icon>
                </button>
            </div>

            <div mat-dialog-content style="height: 100%;max-height: 90%;">
                <img src="assets/icons/icon-72x72.png" style="height: 100%;width: 100%;object-fit: cover;" />
            </div>
        </ng-template>
    `,
})
export class MediaDialogComponent implements AfterViewInit {
    @ViewChild('dialog') template!: TemplateRef<MediaDialogComponent>;

    constructor(private dialog: MatDialog, private router: Router, private route: ActivatedRoute) {
        console.log('MediaDialogComponent - constructor');
    }

    ngAfterViewInit() {
        const ref = this.dialog.open(this.template, {
            width: '100vw',
            maxWidth: '100vw',
            height: '100vh',
            // disableClose: true,
            // closeOnNavigation: false,
            // id: this.route.snapshot.url[0].path,
        });

        ref.backdropClick().subscribe(() => {
            console.log('MediaDialogComponent - backdrop clicked');
            window.history.back();
        });
        ref.afterClosed().subscribe((result) => {
            console.log('MediaDialogComponent - close mat dialog', result);

            if (result === 'back') {
                window.history.back();
            }
        });
    }
}
