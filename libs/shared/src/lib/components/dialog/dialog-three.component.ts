import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'rapp-dialog-three',
    template: `
        <h1 mat-dialog-title>Hi dialog</h1>
        <div mat-dialog-content>
            <p>dialog three</p>
            <button mat-button (click)="closeAll()">Close all</button>
        </div>
        <div mat-dialog-actions>
            <button mat-button (click)="onNoClick()">No Thanks</button>
            <button mat-button mat-dialog-close cdkFocusInitial>Ok</button>
        </div>
    `,
})
export class DialogThreeComponent {
    constructor(
        public dialogRef: MatDialogRef<DialogThreeComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialog: MatDialog
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

    closeAll() {
        this.dialog.closeAll();
    }
}
