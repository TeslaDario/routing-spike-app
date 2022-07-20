import { RouterModule } from '@angular/router';
import { PostRouteComponent } from '@rapp/shared';
import { GroupsComponent } from './groups.component';

export const GroupsRoutes = RouterModule.forChild([
    { path: ':groupId/post/:postId', component: PostRouteComponent },
    { path: '', component: GroupsComponent },
]);
