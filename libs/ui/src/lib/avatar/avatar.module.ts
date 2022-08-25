import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { AvatarComponent } from './avatar.component';

@NgModule({
    imports: [CommonModule, MaterialModule],
    declarations: [AvatarComponent],
    exports: [AvatarComponent],
})
export class AvatarModule {}
