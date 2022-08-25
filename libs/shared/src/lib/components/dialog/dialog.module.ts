import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@rapp/ui';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
    declarations: [AlertDialogComponent, ConfirmDialogComponent],
    imports: [CommonModule, MaterialModule],
})
export class DialogModule {}
