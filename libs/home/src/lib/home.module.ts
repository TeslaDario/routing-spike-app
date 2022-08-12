import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@rapp/core';
import { LayoutModule } from '@rapp/layout';
import { AvatarModule } from '@rapp/shared';
import { SettingsComponent } from './components/settings.component';
import { Settings1Component } from './components/settings1.component';
import { Settings2Component } from './components/settings2.component';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routes';

@NgModule({
    declarations: [HomeComponent, SettingsComponent, Settings1Component, Settings2Component],
    imports: [CommonModule, HomeRoutes, MaterialModule, LayoutModule, AvatarModule],
})
export class HomeModule {}
