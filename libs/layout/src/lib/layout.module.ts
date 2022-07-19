import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { PageComponent } from './components/page/page.component';

@NgModule({
  declarations: [PageComponent],
  imports: [CommonModule, LayoutRoutingModule],
})
export class LayoutModule {}
