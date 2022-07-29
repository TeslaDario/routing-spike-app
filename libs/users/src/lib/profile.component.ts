import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'rapp-profile',
    template: `
        <ng-template #dialog>
            <div mat-dialog-title>
                <button mat-icon-button mat-dialog-close="back" color="primary">
                    <mat-icon>arrow_back</mat-icon>
                </button>
                PROFILE
            </div>

            <div mat-dialog-content>
                <div class="flex flex-center">
                    <rapp-avatar size="l" (click)="openMedia()"></rapp-avatar>
                </div>
            </div>

            <div mat-dialog-actions class="flex flex-center">NAME SURNAME</div>
        </ng-template>
    `,
})
export class ProfileComponent implements AfterViewInit {
    @ViewChild('dialog') template!: TemplateRef<ProfileComponent>;

    constructor(private dialog: MatDialog, private router: Router, private route: ActivatedRoute) {
        console.log('ProfileComponent - constructor');
    }

    ngAfterViewInit() {
        const ref = this.dialog.open(this.template, {
            width: '350px',
        });

        ref.backdropClick().subscribe(() => {
            console.log('ProfileComponent - backdrop clicked');
            window.history.back();
        });
        ref.afterClosed().subscribe((result) => {
            console.log('ProfileComponent - close mat dialog', result);

            if (result === 'back') {
                window.history.back();
            }
        });
    }

    openMedia() {
        this.router.navigate([{ outlets: { media: ['media', 1] } }]);
    }
}
