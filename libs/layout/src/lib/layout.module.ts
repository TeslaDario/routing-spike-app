import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@rapp/shared';
import { CombinedPageComponent } from './combined-page/combined-page.component';
import { ContentComponent } from './content/content.component';
import { ModalComponent } from './modal/modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageComponent } from './page/page.component';
import { ToolbarLeftComponent } from './toolbar/toolbar-left.component';
import { ToolbarRightComponent } from './toolbar/toolbar-right.component';
import { ToolbarComponent } from './toolbar/toolbar.components';

@NgModule({
    declarations: [
        PageComponent,
        ToolbarComponent,
        ToolbarLeftComponent,
        ToolbarRightComponent,
        ContentComponent,
        NavbarComponent,
        CombinedPageComponent,
        ModalComponent,
    ],
    imports: [CommonModule, RouterModule, MaterialModule],
    exports: [
        PageComponent,
        ToolbarComponent,
        ToolbarLeftComponent,
        ToolbarRightComponent,
        ContentComponent,
        NavbarComponent,
        CombinedPageComponent,
        ModalComponent,
    ],
})
export class LayoutModule {}
