import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'rapp-actor',
    template: `
        <ng-template #dialog>
            <div mat-dialog-title>
                <button mat-icon-button mat-dialog-close="back" color="primary">
                    <mat-icon>arrow_back</mat-icon>
                </button>
                MY PROFILE
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
export class ActorComponent implements AfterViewInit {
    @ViewChild('dialog') template!: TemplateRef<ActorComponent>;

    constructor(private dialog: MatDialog, private router: Router, private route: ActivatedRoute) {
        console.log('ActorComponent - constructor');
    }

    ngAfterViewInit() {
        const ref = this.dialog.open(this.template, {
            width: '90vw',
            maxWidth: '90vw',
            height: '80vh',
            disableClose: true,
            closeOnNavigation: false,
        });

        ref.backdropClick().subscribe(() => {
            console.log('ActorComponent - backdrop clicked');
            window.history.back();
        });
        ref.afterClosed().subscribe((result) => {
            console.log('ActorComponent - close mat dialog', result);

            if (result === 'back') {
                window.history.back();
            }
        });
    }

    openMedia() {
        this.router.navigate([{ outlets: { media: ['media', 1] } }]);
    }
}
