import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

export interface InfoDialogData {
    contentText: string;
    confirmButtonText?: string;
}

export type DialogOpts = Omit<
    MatDialogConfig,
    'panelClass' | 'data' | 'height' | 'minHeight' | 'maxHeight' | 'width' | 'minWidth' | 'maxWidth'
>;
export type ModalOpts = DialogOpts & { autoHeight?: boolean };
export type Callback = () => void;

export interface ConfirmDialogData {
    /** Color of the cancel button. Use undefined for base color (black) */
    type?: 'normal' | 'warn';
    titleText?: string;
    contentText: string;
    confirmButtonText: string;
    onConfirmCallback?: Callback;
}

const ConfirmDialogDataWithDefaults = (data: ConfirmDialogData): ConfirmDialogData => ({
    ...data,
    type: data.type ?? 'warn',
});

const ConfirmDialogOptsWithDefault = (opts: DialogOpts): DialogOpts => ({ hasBackdrop: true, ...opts });

@Injectable({
    providedIn: 'root',
})
export class DialogService {
    constructor(public dialog: MatDialog) {}

    /*
     * Opens a Confirm Dialog and returns the reference to the dialog
     */
    confirm(data: ConfirmDialogData, opts: DialogOpts = {}): MatDialogRef<ConfirmDialogComponent, boolean> {
        return this.dialog.open(ConfirmDialogComponent, {
            panelClass: 'confirm-dialog',
            closeOnNavigation: opts.closeOnNavigation ?? false,
            autoFocus: opts.autoFocus ?? true,
            data: ConfirmDialogDataWithDefaults(data),
            ...ConfirmDialogOptsWithDefault(opts),
        });
    }

    /*
     * Opens a Confirm Dialog and returns an observable with the dialog's result
     */
    confirm$(data: ConfirmDialogData, opts: DialogOpts = {}): Observable<boolean | undefined> {
        return this.confirm(data, opts).afterClosed();
    }

    info(data: InfoDialogData, opts = {}): MatDialogRef<AlertDialogComponent, any> {
        return this.dialog.open(AlertDialogComponent, {
            panelClass: 'confirm-dialog',
            data,
            ...ConfirmDialogOptsWithDefault(opts),
        });
    }

    info$(data: InfoDialogData): Observable<any> {
        return this.info(data).afterClosed();
    }
}
