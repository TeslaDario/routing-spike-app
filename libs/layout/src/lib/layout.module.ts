import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeSharedModule } from '@rapp/home-shared';
import { AvatarModule, MaterialModule } from '@rapp/ui';
import { CombinedPageComponent } from './combined-page/combined-page.component';
import { CenterContentComponent } from './content/center-content.component';
import { ContentComponent } from './content/content.component';
import { ModalPageComponent } from './modal-page/modal-page.component';
import { FooterNavbarComponent } from './navigation/footer-navbar/footer-navbar.component';
import { HeaderNavbarComponent } from './navigation/header-navbar/header-navbar.component';
import { BackNavigationDirective } from './navigation/navigation.directive';
import { PageComponent } from './page/page.component';
import { ToolbarCenterComponent } from './toolbar/toolbar-center.component';
import { ToolbarLeftComponent } from './toolbar/toolbar-left.component';
import { ToolbarRightComponent } from './toolbar/toolbar-right.component';
import { ToolbarComponent } from './toolbar/toolbar.components';

@NgModule({
    imports: [CommonModule, RouterModule, MaterialModule, HomeSharedModule, AvatarModule],
    declarations: [
        PageComponent,
        ContentComponent,
        CenterContentComponent,
        HeaderNavbarComponent,
        FooterNavbarComponent,
        ToolbarComponent,
        ToolbarLeftComponent,
        ToolbarCenterComponent,
        ToolbarRightComponent,
        CombinedPageComponent,
        ModalPageComponent,

        BackNavigationDirective,
    ],
    exports: [
        PageComponent,
        ContentComponent,
        CenterContentComponent,
        HeaderNavbarComponent,
        FooterNavbarComponent,
        ToolbarComponent,
        ToolbarLeftComponent,
        ToolbarCenterComponent,
        ToolbarRightComponent,
        CombinedPageComponent,
        ModalPageComponent,

        BackNavigationDirective,
    ],
})
export class LayoutModule {}
