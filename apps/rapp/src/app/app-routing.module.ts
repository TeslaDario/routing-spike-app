import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgWelcomeComponent } from './ng-welcome.component';
import { NxWelcomeComponent } from './nx-welcome.component';

const routes: Routes = [
  { path: 'ng', component: NgWelcomeComponent },
  { path: 'nx', component: NxWelcomeComponent },
  {
    path: '',
    loadChildren: () => import('@rapp/layout').then((m) => m.LayoutModule),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
