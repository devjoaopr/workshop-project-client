import { Routes } from '@angular/router';
import { Finance } from './features/finance/pages/finance';
import { User } from './features/user-register/pages/user';
import { Homepage } from './features/homepage/homepage';

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
];
