import { Routes } from '@angular/router';
import { Finance } from './features/finance/pages/finance';
import { User } from './features/user-register/pages/user';
import { Homepage } from './features/homepage/homepage';
import { Login } from './features/auth/login/login';

export const routes: Routes = [
  {
    path: 'finance',
    component: Finance,
  },
  {
    path: 'register',
    component: User,
  },
  {
    path: 'homepage',
    component: Homepage,
  },
  {
    path: 'login',
    component: Login,
  },
];
