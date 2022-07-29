import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from '@rapp/layout';

@Component({
    selector: 'rapp-group-info-copy',
    template: `
        <rapp-modal #modal>
            <ng-container *ngIf="activeScreen === 'info'">
                <div mat-dialog-title>
                    <button mat-icon-button (click)="modal.ref.close('back')" color="primary">
                        <mat-icon>arrow_back</mat-icon>
                    </button>
                    GROUP INFO
                </div>

                <div mat-dialog-content>
                    <div>
                        <mat-form-field appearance="outline">
                            <input type="text" placeholder="State" matInput cdkFocusInitial />
                        </mat-form-field>
                    </div>

                    <rapp-avatar (click)="openProfile()"></rapp-avatar>
                    <button mat-flat-button (click)="changeScreen('members')" color="accent">Go to members</button>
                </div>

                <div mat-dialog-actions>
                    <button mat-flat-button (click)="modal.ref.close('back')" color="primary">CLOSE</button>
                </div>
            </ng-container>

            <ng-container *ngIf="activeScreen === 'members'">
                <div mat-dialog-title>GROUP MEMBERS</div>

                <div mat-dialog-content>
                    <button mat-flat-button (click)="changeScreen('info')" color="accent">go back</button>
                </div>

                <div mat-dialog-actions>
                    <button mat-flat-button (click)="modal.ref.close('back')" color="primary">CLOSE</button>
                </div>
            </ng-container>
        </rapp-modal>
    `,
})
export class GroupInfoCopyComponent implements AfterViewInit {
    @ViewChild('modal') modal!: ModalComponent;
    activeScreen: 'info' | 'members' = 'info';

    constructor(private router: Router) {
        console.log('GroupInfoCopyComponent - constructor');
    }

    ngAfterViewInit() {
        this.modal.ref.backdropClick().subscribe(() => {
            console.log('GroupInfoCopyComponent - backdrop clicked', this.activeScreen);
            if (this.activeScreen !== 'info') {
                this.activeScreen = 'info';
                return;
            }
            window.history.back();
        });
        this.modal.ref.afterClosed().subscribe((result) => {
            console.log('GroupInfoCopyComponent - close mat dialog', result);
            if (result === 'back') {
                window.history.back();
            }
        });
    }

    changeScreen(screen: 'info' | 'members') {
        this.activeScreen = screen;
    }

    createGroupChat() {
        this.router.navigate(['messages', { outlets: { dialog: ['create-group-chat'] } }]);
    }

    openProfile() {
        this.router.navigate([{ outlets: { profile: ['users', 'me'] } }]);
    }
}
