import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogTwoComponent } from './dialog-two.component';

@Component({
    selector: 'rapp-dialog-one',
    template: `
        <h1 mat-dialog-title>Hi dialog</h1>
        <div mat-dialog-content>
            <p>dialog one</p>
            <button mat-button (click)="openTwo()">Open dialog two</button>
        </div>
        <div mat-dialog-actions>
            <button mat-button (click)="onNoClick()">No Thanks</button>
            <button mat-button mat-dialog-close cdkFocusInitial>Ok</button>
        </div>
    `,
})
export class DialogOneComponent {
    constructor(
        public dialogRef: MatDialogRef<DialogOneComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialog: MatDialog
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

    openTwo() {
        const dialogRef = this.dialog.open(DialogTwoComponent, {
            width: '90vw',
            maxWidth: '90vw',
            height: '80vh',
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log('The dialog two was closed');
        });
    }
}
