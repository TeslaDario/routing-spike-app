import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@rapp/ui';
import { HomeItemsComponent } from './home-items.component';

@NgModule({
    imports: [CommonModule, RouterModule, MaterialModule],
    declarations: [HomeItemsComponent],
    exports: [HomeItemsComponent],
})
export class HomeSharedModule {}
