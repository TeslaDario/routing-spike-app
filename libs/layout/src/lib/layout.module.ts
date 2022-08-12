import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@rapp/core';
import { CombinedPageComponent } from './combined-page/combined-page.component';
import { ContentComponent } from './content/content.component';
import { ModalPageComponent } from './modal-page/modal-page.component';
import { NavbarComponent } from './navigation/navbar.component';
import { BackNavigationDirective } from './navigation/navigation.directive';
import { PageComponent } from './page/page.component';
import { ToolbarLeftComponent } from './toolbar/toolbar-left.component';
import { ToolbarRightComponent } from './toolbar/toolbar-right.component';
import { ToolbarComponent } from './toolbar/toolbar.components';

@NgModule({
    imports: [CommonModule, RouterModule, MaterialModule],
    declarations: [
        PageComponent,
        ToolbarComponent,
        ToolbarLeftComponent,
        ToolbarRightComponent,
        ContentComponent,
        NavbarComponent,
        CombinedPageComponent,
        ModalPageComponent,

        BackNavigationDirective,
    ],
    exports: [
        PageComponent,
        ToolbarComponent,
        ToolbarLeftComponent,
        ToolbarRightComponent,
        ContentComponent,
        NavbarComponent,
        CombinedPageComponent,
        ModalPageComponent,

        BackNavigationDirective,
    ],
})
export class LayoutModule {}
