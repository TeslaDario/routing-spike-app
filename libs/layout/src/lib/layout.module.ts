import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@rapp/shared';
import { ContentComponent } from './components/content/content.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.components';
import { PageComponent } from './page/page.component';

@NgModule({
    declarations: [PageComponent, ToolbarComponent, NavbarComponent, ContentComponent],
    imports: [CommonModule, RouterModule, MaterialModule],
    exports: [PageComponent],
})
export class LayoutModule {}
