import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { AuthGuard } from './core/auth/auth.guard';
import { RegisterComponent } from './core/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'app',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'landing-page',
        loadChildren: () =>
          import('./modules/home/home.module').then((mod) => mod.HomeModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'landing-page',
      },
    ],
  },
  {
    path: 'edit-page',
    loadChildren: () =>
      import('./modules/edit/edit-status.module').then(
        (mod) => mod.EditStatusModule
      ),
  },
  {
    path: 'view-page',
    loadChildren: () =>
      import('./modules/view/view-status.module').then(
        (mod) => mod.ViewStatusModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
