import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { FloatingActionButtonComponent } from './floating-action-button.component';

@NgModule({
    imports: [CommonModule, MaterialModule],
    declarations: [FloatingActionButtonComponent],
    exports: [FloatingActionButtonComponent],
})
export class FloatingActionButtonModule {}
