import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@rapp/shared';
import { ContentComponent } from './components/content/content.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarRightComponent } from './components/toolbar/toolbar-right.component';
import { ToolbarComponent } from './components/toolbar/toolbar.components';
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
    ],
    imports: [CommonModule, RouterModule, MaterialModule],
    exports: [PageComponent, SplitPageComponent, ContentComponent, ToolbarRightComponent],
})
export class LayoutModule {}
