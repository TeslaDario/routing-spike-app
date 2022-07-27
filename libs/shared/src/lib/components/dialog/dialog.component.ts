import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'rapp-dialog',
    template: `
        <ng-template #dialog>
            <div mat-dialog-title>Sign In</div>

            <div mat-dialog-content>
                <div>
                    <mat-form-field appearance="outline">
                        <input type="email" placeholder="Email" matInput />
                    </mat-form-field>
                </div>

                <div>
                    <mat-form-field appearance="outline">
                        <input type="password" placeholder="Password" matInput />
                    </mat-form-field>
                </div>
            </div>

            <div mat-dialog-actions>
                <button mat-flat-button mat-dialog-close="back" color="primary">Sign In</button>
            </div>
        </ng-template>
    `,
})
export class DialogComponent implements AfterViewInit {
    @ViewChild('dialog') template!: TemplateRef<any>;

    constructor(private dialog: MatDialog, private router: Router, private route: ActivatedRoute) {}

    ngAfterViewInit() {
        const ref = this.dialog.open(this.template, {
            width: '350px',
        });

        ref.backdropClick().subscribe(() => {
            console.log('backdrop clicked');
            window.history.back();
        });
        ref.afterClosed().subscribe((result) => {
            console.log('close mat dialog', result);

            if (result === 'back') {
                window.history.back();
            }
        });
    }
}
