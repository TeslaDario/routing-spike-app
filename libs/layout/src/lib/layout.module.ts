import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@rapp/shared';
import { ContentComponent } from './components/content/content.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarRightComponent } from './components/toolbar/toolbar-right.component';
import { ToolbarComponent } from './components/toolbar/toolbar.components';
import { LayoutDirective } from './layout.directive';
import { ModalComponent } from './modal/modal.component';
import { PageComponent } from './page/page.component';
import { SplitPageComponent } from './split-page/split-page.component';

@NgModule({
    declarations: [
        PageComponent,
        SplitPageComponent,
        ToolbarComponent,
        ToolbarRightComponent,
        NavbarComponent,
        ContentComponent,
        ModalComponent,
        LayoutDirective,
    ],
    imports: [CommonModule, RouterModule, MaterialModule],
    exports: [
        PageComponent,
        SplitPageComponent,
        ContentComponent,
        ToolbarRightComponent,
        ModalComponent,
        LayoutDirective,
    ],
})
export class LayoutModule {}
