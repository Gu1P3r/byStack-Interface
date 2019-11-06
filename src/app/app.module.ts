
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routing } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminLayoutRoutingModule } from './layouts/admin-layout/admin-layout.routing.module';

import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { LoginComponent } from './layouts/views/login/login.component';
import { TextMaskModule } from 'angular2-text-mask';
import { NomeStorageService } from './storage/nome-storage.service';

@NgModule({
  imports: [
    routing,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    ToastrModule.forRoot(),
    RouterModule,
    AdminLayoutRoutingModule,
    TextMaskModule

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent
    
  ],
  providers: [
    NomeStorageService
  ],
  bootstrap: [
    AppComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
