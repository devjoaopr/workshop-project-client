import { Routes } from '@angular/router';
import { Finance } from './features/finance/pages/finance';
import { User } from './features/user-register/pages/user';
import { Homepage } from './features/homepage/homepage';
import { Login } from './features/login/login-pages/login';
import { AuthGuard } from './core/auth/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },

  {
    path: 'finance',
    component: Finance,
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    component: User,
  },
  {
    path: 'homepage',
    component: Homepage,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: Login,
  },
];
