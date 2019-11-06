import { LoginComponent } from './layouts/views/login/login.component';
import { Routes, RouterModule } from '@angular/router';

import { ModuleWithProviders } from '@angular/compiler/src/core';

const routes: Routes =[

  { path: 'login', component: LoginComponent },
  { path: 'layout', loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);