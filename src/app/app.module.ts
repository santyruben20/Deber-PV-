import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { AuthComponent } from './auth/auth.component';
import { SharedComponent } from './shared/shared.component';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { NoFoundComponent } from './no-found/no-found.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    AuthComponent,
    SharedComponent,
    NoFoundComponent,  
  ],
  imports: [
    PagesModule,
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
