import { Component } from '@angular/core';

@Component({
    selector: 'rapp-schedule',
    template: `
        <rapp-page>
            <rapp-toolbar>
                <rapp-toolbar-left>
                    <button mat-icon-button mat-dialog-close color="primary">
                        <mat-icon>arrow_back</mat-icon>
                    </button>
                    <p class="mb-0 ml-4">Schedule Post</p>
                </rapp-toolbar-left>
                <rapp-toolbar-right>
                    <button mat-button [mat-dialog-close]="someData" color="primary">Save</button>
                </rapp-toolbar-right>
            </rapp-toolbar>

            <rapp-content class="container">
                <input
                    type="text"
                    placeholder="Enter some state to pass to parent"
                    style="width: 100%"
                    [(ngModel)]="someData"
                />
            </rapp-content>
        </rapp-page>
    `,
})
export class ScheduleDialogComponent {
    someData = '';
}
