import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeItemsComponent } from './home-items.component';

@NgModule({
    imports: [CommonModule],
    declarations: [HomeItemsComponent],
    exports: [HomeItemsComponent],
})
export class HomeSharedModule {}
