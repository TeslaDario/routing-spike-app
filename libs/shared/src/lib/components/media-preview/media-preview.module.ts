import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@rapp/layout';
import { MaterialModule } from '@rapp/ui';
import { MediaPreviewComponent } from './media-preview.component';

@NgModule({
    imports: [CommonModule, MaterialModule, LayoutModule],
    declarations: [MediaPreviewComponent],
    exports: [MediaPreviewComponent],
})
export class MediaPreviewModule {}
