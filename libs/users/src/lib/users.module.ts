import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@rapp/layout';
import { AvatarModule, MaterialModule } from '@rapp/ui';
import { ActorComponent } from './actor.component';
import { ProfileComponent } from './profile.component';
import { UserRoutes } from './users.routes';

@NgModule({
    imports: [CommonModule, UserRoutes, MaterialModule, LayoutModule, AvatarModule],
    declarations: [ProfileComponent, ActorComponent],
})
export class UsersModule {}
