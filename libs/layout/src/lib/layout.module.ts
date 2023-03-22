import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeSharedModule } from '@rapp/home-shared';
import { AvatarModule, MaterialModule, MenuPanelModule } from '@rapp/ui';
import { CenterContentComponent } from './components/content/center-content.component';
import { ContentComponent } from './components/content/content.component';
import { ToolbarCenterComponent } from './components/toolbar/toolbar-center.component';
import { ToolbarLeftComponent } from './components/toolbar/toolbar-left.component';
import { ToolbarRightComponent } from './components/toolbar/toolbar-right.component';
import { ToolbarComponent } from './components/toolbar/toolbar.components';
import { FooterNavbarComponent } from './navigation/footer-navbar/footer-navbar.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { BackNavigationDirective } from './navigation/navigation.directive';
import { CombinedViewComponent } from './views/combined-view/combined-view.component';
import { DrawerViewComponent } from './views/drawer-view/drawer-view.component';
import { ModalViewComponent } from './views/modal-view/modal-view.component';
import { ViewComponent } from './views/view/view.component';

@NgModule({
    imports: [CommonModule, RouterModule, MaterialModule, HomeSharedModule, AvatarModule, MenuPanelModule],
    declarations: [
        ViewComponent,
        ContentComponent,
        CenterContentComponent,
        NavbarComponent,
        FooterNavbarComponent,
        ToolbarComponent,
        ToolbarLeftComponent,
        ToolbarCenterComponent,
        ToolbarRightComponent,
        CombinedViewComponent,
        ModalViewComponent,
        DrawerViewComponent,

        BackNavigationDirective,
    ],
    exports: [
        ViewComponent,
        ContentComponent,
        CenterContentComponent,
        NavbarComponent,
        FooterNavbarComponent,
        ToolbarComponent,
        ToolbarLeftComponent,
        ToolbarCenterComponent,
        ToolbarRightComponent,
        CombinedViewComponent,
        ModalViewComponent,
        DrawerViewComponent,

        BackNavigationDirective,
    ],
})
export class LayoutModule {}
