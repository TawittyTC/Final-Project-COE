import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { HeaderComponent } from './header/header.component';

import { OverlayModule } from '@angular/cdk/overlay'
import { CdkMenuModule } from '@angular/cdk/menu'
// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { LogoutComponent } from './logout/logout.component';
@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    StatisticsComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    SublevelMenuComponent,
    HeaderComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    OverlayModule,
    CdkMenuModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-wg2x3rls3me8udhz.jp.auth0.com',
      clientId: 'bJYCf8w408d6Fdq1wDQEvxGGcEJsmcxd',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
