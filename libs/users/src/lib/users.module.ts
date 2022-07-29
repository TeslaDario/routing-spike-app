import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarModule, MaterialModule } from '@rapp/shared';
import { ActorComponent } from './actor.component';

import { ProfileComponent } from './profile.component';
import { UserRoutes } from './users.routes';

@NgModule({
    imports: [CommonModule, UserRoutes, MaterialModule, AvatarModule],
    declarations: [ProfileComponent, ActorComponent],
})
export class UsersModule {}
