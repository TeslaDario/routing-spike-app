import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatRippleModule, MatDialogModule],
    exports: [MatToolbarModule, MatIconModule, MatButtonModule, MatRippleModule, MatDialogModule],
})
export class MaterialModule {}
