/**
 * Url settings of the app
 *
 * @version  1.0.0
 * @url
 *
 * Copyright Md Saeed Sharman.
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 */

import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { EditItemComponent } from './components/pages/edit-item/edit-item.component';
import { EditItemResolver } from './components/pages/edit-item/edit-item.resolver';
import { AddItemComponent } from './components/pages/add-item/add-item.component';
import { AuthGuard } from './services/auth-guard/authguard.service';
import { LoginComponent } from './components/pages/login/login.component';

export const rootRouterConfig: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'add-item', component: AddItemComponent, canActivate: [AuthGuard] },
  {
    path: 'details/:id',
    component: EditItemComponent,
    resolve: { data: EditItemResolver },
    canActivate: [AuthGuard],
  },
];
