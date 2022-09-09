import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@rapp/ui';

import { SearchResultsComponent } from './search-results.component';

@NgModule({
    imports: [CommonModule, MaterialModule],
    exports: [SearchResultsComponent],
    declarations: [SearchResultsComponent],
})
export class SharedComponentsModule {}
