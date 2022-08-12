import { ComponentType } from '@angular/cdk/portal';
import { Injectable, TemplateRef } from '@angular/core';
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
    constructor(private dialog: MatDialog) {}
    hasOpenDialogs(): boolean {
        return this.dialog.openDialogs.length > 0;
    }
    closeLast(): void {
        const openDialogs = this.dialog.openDialogs;
        if (openDialogs.length) {
            openDialogs[openDialogs.length - 1].close();
        }
    }

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

    info(data: InfoDialogData, opts: DialogOpts = {}): MatDialogRef<AlertDialogComponent, any> {
        return this.dialog.open(AlertDialogComponent, {
            panelClass: 'confirm-dialog',
            data,
            ...ConfirmDialogOptsWithDefault(opts),
        });
    }

    info$(data: InfoDialogData): Observable<any> {
        return this.info(data).afterClosed();
    }

    /*
     * Opens a Fullscreen Dialog and returns an observable with the dialog's result
     */
    fullscreen<DialogComponent, DialogData = any, DialogResult = any>(
        dialogComponent: ComponentType<DialogComponent> | TemplateRef<DialogComponent>,
        data?: DialogData,
        opts: DialogOpts = {}
    ) {
        return this.dialog.open<DialogComponent, DialogData, DialogResult>(dialogComponent, {
            width: '90vw',
            maxWidth: '720px',
            height: '80vh',
            panelClass: 'fullscreen-dialog',
            closeOnNavigation: false,
            data,
            ...opts,
            ...ConfirmDialogOptsWithDefault(opts),
        });
    }
}
