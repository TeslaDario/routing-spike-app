import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../material.module';

import { DialogOneComponent } from './dialog-one.component';
import { DialogThreeComponent } from './dialog-three.component';
import { DialogTwoComponent } from './dialog-two.component';
import { DialogComponent } from './dialog.component';

@NgModule({
    imports: [CommonModule, MaterialModule],
    exports: [],
    declarations: [DialogComponent, DialogOneComponent, DialogTwoComponent, DialogThreeComponent],
    providers: [],
})
export class DialogModule {}
