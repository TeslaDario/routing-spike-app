import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { ItemComponent } from './item.component';

@NgModule({
    imports: [CommonModule, MaterialModule],
    declarations: [ItemComponent],
    exports: [ItemComponent],
})
export class ItemModule {}
