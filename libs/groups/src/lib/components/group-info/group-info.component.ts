import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'rapp-group-info',
    template: `
        <ng-template #dialog>
            <ng-container *ngIf="activeScreen === 'info'">
                <div mat-dialog-title>
                    <button mat-icon-button mat-dialog-close="back" color="primary">
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
                    <button mat-flat-button mat-dialog-close="back" color="primary">CLOSE</button>
                </div>
            </ng-container>

            <ng-container *ngIf="activeScreen === 'members'">
                <div mat-dialog-title>GROUP MEMBERS</div>

                <div mat-dialog-content>
                    <button mat-flat-button (click)="changeScreen('info')" color="accent">go back</button>
                </div>

                <div mat-dialog-actions>
                    <button mat-flat-button mat-dialog-close="back" color="primary">CLOSE</button>
                </div>
            </ng-container>
        </ng-template>
    `,
})
export class GroupInfoComponent implements AfterViewInit {
    @ViewChild('dialog') template!: TemplateRef<GroupInfoComponent>;
    activeScreen: 'info' | 'members' = 'info';

    constructor(private dialog: MatDialog, private router: Router, private route: ActivatedRoute) {
        console.log('GroupInfoComponent - constructor');
    }

    ngAfterViewInit() {
        const ref = this.dialog.open(this.template, {
            width: '90vw',
            maxWidth: '90vw',
            height: '80vh',
            disableClose: true,
            closeOnNavigation: false,
            // id: this.route.snapshot.url[0].path,
        });

        ref.backdropClick().subscribe(() => {
            console.log('GroupInfoComponent - backdrop clicked', this.activeScreen);
            if (this.activeScreen !== 'info') {
                this.activeScreen = 'info';
                return;
            }
            window.history.back();
        });
        ref.afterClosed().subscribe((result) => {
            console.log('GroupInfoComponent - close mat dialog', result);

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
