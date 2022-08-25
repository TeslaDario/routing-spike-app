// import { RouterModule } from '@angular/router';
// import { PostRouteComponent } from '@rapp/post-feed';
// import { GroupInfoComponent } from './components/group-info/group-info.component';
// import { GroupMembersComponent } from './components/group-members/group-members.component';
// import { GroupOverviewComponent } from './components/group-overview/group-overview.component';
// import { GroupsComponent } from './groups.component';

// export const GroupsRoutes = RouterModule.forChild([
//     { path: ':groupId/post/:postId', component: PostRouteComponent },
//     {
//         path: '',
//         component: GroupsComponent,
//         children: [
//             {
//                 path: ':groupId',
//                 component: GroupOverviewComponent,
//                 children: [
//                     {
//                         path: 'info',
//                         component: GroupInfoComponent,
//                         children: [
//                             {
//                                 path: 'members',
//                                 component: GroupMembersComponent,
//                             },
//                         ],
//                     },
//                 ],
//             },
//         ],
//     },
// ]);
