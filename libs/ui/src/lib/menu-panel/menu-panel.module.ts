import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { SearchInputModule } from '../search-input';
import { MenuPanelComponent } from './menu-panel.component';

@NgModule({
    imports: [CommonModule, MaterialModule, SearchInputModule],
    declarations: [MenuPanelComponent],
    exports: [MenuPanelComponent],
})
export class MenuPanelModule {}
