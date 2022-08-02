import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from '@rapp/layout';

@Component({
    selector: 'rapp-group-info',
    template: `
        <rapp-modal>
            <rapp-page>
                <rapp-toolbar>
                    <rapp-toolbar-left>
                        <button mat-icon-button (click)="modal.ref.close('back')" color="primary">
                            <mat-icon>arrow_back</mat-icon>
                        </button>
                        <p class="mb-0 ml-4">GROUP INFO</p>
                    </rapp-toolbar-left>
                </rapp-toolbar>

                <rapp-content>
                    <div class="container">
                        <mat-form-field appearance="outline">
                            <input type="text" placeholder="State" [(ngModel)]="someData" matInput cdkFocusInitial />
                        </mat-form-field>

                        <rapp-avatar (click)="openProfile()"></rapp-avatar>

                        <br />
                        <button mat-flat-button (click)="openMembers()" color="accent">Go to members</button>
                        <br />
                        <button mat-flat-button (click)="modal.ref.close('back')" color="primary">CLOSE</button>
                    </div>
                </rapp-content>
            </rapp-page>
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
