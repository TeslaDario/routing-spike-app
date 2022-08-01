import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from '@rapp/layout';

@Component({
    selector: 'rapp-group-info',
    template: `
        <rapp-modal>
            <div mat-dialog-title>
                <button mat-icon-button (click)="modal.ref.close('back')" color="primary">
                    <mat-icon>arrow_back</mat-icon>
                </button>
                GROUP INFO
            </div>

            <div mat-dialog-content>
                <div>
                    <mat-form-field appearance="outline">
                        <input type="text" placeholder="State" [(ngModel)]="someData" matInput cdkFocusInitial />
                    </mat-form-field>
                </div>

                <rapp-avatar (click)="openProfile()"></rapp-avatar>
                <button mat-flat-button (click)="openMembers()" color="accent">Go to members</button>
            </div>

            <div mat-dialog-actions>
                <button mat-flat-button (click)="modal.ref.close('back')" color="primary">CLOSE</button>
            </div>
        </rapp-modal>
    `,
})
export class GroupInfoComponent implements AfterViewInit {
    @ViewChild(ModalComponent) modal!: ModalComponent;
    someData = '';

    constructor(private router: Router) {
        console.log('GroupInfoComponent - constructor');
    }

    ngAfterViewInit() {
        this.modal.ref.backdropClick().subscribe(() => {
            console.log('GroupInfoComponent - backdrop clicked');
            window.history.back();
        });
        this.modal.ref.afterClosed().subscribe((result) => {
            console.log('GroupInfoComponent - close mat dialog', result);
            if (result === 'back') {
                window.history.back();
            }
        });
    }

    openMembers() {
        this.router.navigate(['groups', { outlets: { dialog: ['members'] } }]);
    }

    openProfile() {
        this.router.navigate([{ outlets: { profile: ['users', 'me'] } }]);
    }
}
