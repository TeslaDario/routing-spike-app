import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@rapp/shared';
import { CombinedViewDetailDirective } from './combined-view/combined-view-detail.directive';
import { CombinedViewComponent } from './combined-view/combined-view.component';
import { ContentComponent } from './components/content/content.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarRightComponent } from './components/toolbar/toolbar-right.component';
import { ToolbarComponent } from './components/toolbar/toolbar.components';
import { ModalComponent } from './modal/modal.component';
import { PageComponent } from './page/page.component';

@NgModule({
    declarations: [
        PageComponent,
        ToolbarComponent,
        ToolbarRightComponent,
        NavbarComponent,
        ContentComponent,
        ModalComponent,
        CombinedViewComponent,
        CombinedViewDetailDirective,
    ],
    imports: [CommonModule, RouterModule, MaterialModule],
    exports: [
        PageComponent,
        ContentComponent,
        ToolbarRightComponent,
        ModalComponent,
        CombinedViewComponent,
        CombinedViewDetailDirective,
    ],
})
export class LayoutModule {}
