import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProcesadorComponent } from './pages/procesador/procesador.component';
import { ThemingService, ThemingModule } from '@fundamental-ngx/core/theming';
import { RouterModule } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PlatformDynamicPageModule } from '@fundamental-ngx/platform/dynamic-page';
import { BarModule } from '@fundamental-ngx/core/bar';
import { ToolbarModule } from '@fundamental-ngx/core/toolbar';
import { PlatformButtonModule } from '@fundamental-ngx/platform/button';
import { DynamicPageModule } from '@fundamental-ngx/core/dynamic-page';
import { ButtonModule } from '@fundamental-ngx/core/button';
import { IconModule } from '@fundamental-ngx/core/icon';
@NgModule({
  declarations: [AppComponent, ProcesadorComponent],
  imports: [
    PlatformDynamicPageModule,
    BarModule,
    PlatformButtonModule,
    ToolbarModule,
    ButtonModule,
    IconModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
