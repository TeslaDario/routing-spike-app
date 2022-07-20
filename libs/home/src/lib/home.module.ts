import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@rapp/layout';
import { AvatarModule, MaterialModule } from '@rapp/shared';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routes';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, HomeRoutes, MaterialModule, LayoutModule, AvatarModule],
})
export class HomeModule {}
