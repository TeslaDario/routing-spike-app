import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActorComponent } from './actor.component';

import { ProfileComponent } from './profile.component';
import { UserRoutes } from './users.routes';

@NgModule({
    imports: [CommonModule, UserRoutes],
    declarations: [ProfileComponent, ActorComponent],
})
export class UsersModule {}
