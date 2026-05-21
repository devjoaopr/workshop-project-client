import { Routes } from '@angular/router';
import { Finance } from './features/finance/pages/finance';
import { User } from './features/user/pages/user';

export const routes: Routes = [
  {
    path: 'finance',
    component: Finance,
  },
  {
    path: 'login',
    component: User,
  },
];
