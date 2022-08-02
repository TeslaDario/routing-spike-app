import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'rapp-group-info',
    template: `
        <rapp-modal>
            <rapp-page>
                <rapp-toolbar>
                    <rapp-toolbar-left>
                        <button mat-icon-button rapp-modal-close color="primary">
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
                        <button mat-flat-button rapp-modal-close color="primary">CLOSE</button>
                    </div>
                </rapp-content>
            </rapp-page>
        </rapp-modal>
    `,
})
export class GroupInfoComponent {
    someData = '';

    constructor(private router: Router) {
        console.log('GroupInfoComponent - constructor');
    }

    openMembers() {
        this.router.navigate(['groups', { outlets: { modal: ['members'] } }]);
    }

    openProfile() {
        this.router.navigate([{ outlets: { users: ['users', 'me'] } }]);
    }
}
