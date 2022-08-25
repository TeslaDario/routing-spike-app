import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeSharedModule } from '@rapp/home-shared';
import { LayoutModule } from '@rapp/layout';
import { AvatarModule, MaterialModule } from '@rapp/ui';
import { SettingsComponent } from './components/settings.component';
import { Settings1Component } from './components/settings1.component';
import { Settings2Component } from './components/settings2.component';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routes';

@NgModule({
    declarations: [HomeComponent, SettingsComponent, Settings1Component, Settings2Component],
    imports: [CommonModule, HomeRoutes, HomeSharedModule, MaterialModule, LayoutModule, AvatarModule],
})
export class HomeFeatureModule {}
