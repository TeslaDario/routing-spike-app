import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@rapp/core';
import { LayoutModule } from '@rapp/layout';
import { MediaPreviewComponent } from './media-preview.component';

@NgModule({
    imports: [CommonModule, MaterialModule, LayoutModule],
    declarations: [MediaPreviewComponent],
    exports: [MediaPreviewComponent],
})
export class MediaPreviewModule {}
