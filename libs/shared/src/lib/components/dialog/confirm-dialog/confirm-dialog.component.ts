import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Callback, ConfirmDialogData } from '../dialog.service';
@Component({
    selector: 'rapp-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent {
    callback!: Callback;
    public isLoading = false;

    constructor(
        public dialogRef: MatDialogRef<ConfirmDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData
    ) {
        if (data.onConfirmCallback) {
            this.callback = data.onConfirmCallback;
        }
    }

    onCallbackButtonClick() {
        if (this.callback !== undefined) {
            this.callback();
            this.isLoading = true;
        }
    }
}
