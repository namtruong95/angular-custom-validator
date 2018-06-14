import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'password-equal',
    loadChildren: './password-equal/password-equal.module#PasswordEqualModule'
  },
  {
    path: 'numberic',
    loadChildren: './numberic/numberic.module#NumbericModule'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
