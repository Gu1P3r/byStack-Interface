import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';

export const LoginRoutes: Routes = [

  {
    path: '', component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(LoginRoutes)],
  exports: [RouterModule]
})

export class LoginRoutingModule {

}

