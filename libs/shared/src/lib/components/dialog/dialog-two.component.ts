import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogThreeComponent } from './dialog-three.component';

@Component({
    selector: 'rapp-dialog-two',
    template: `
        <h1 mat-dialog-title>Hi dialog</h1>
        <div mat-dialog-content>
            <p>dialog two</p>
            <button mat-button (click)="openThree()">Open dialog three</button>
        </div>
        <div mat-dialog-actions>
            <button mat-button (click)="onNoClick()">No Thanks</button>
            <button mat-button mat-dialog-close cdkFocusInitial>Ok</button>
        </div>
    `,
})
export class DialogTwoComponent {
    constructor(
        public dialogRef: MatDialogRef<DialogTwoComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialog: MatDialog
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

    openThree() {
        const dialogRef = this.dialog.open(DialogThreeComponent, {
            width: '90vw',
            maxWidth: '90vw',
            height: '80vh',
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log('The dialog three was closed');
        });
    }
}
