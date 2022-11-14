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
import { FormularioComponent } from './components/cabecera/formulario/formulario.component';
import { sharedCoreModules } from './utils/sharedCoreModules';
import { sharedPlatformModules } from './utils/sharedPlatformModules';
import { ReactiveFormsModule } from '@angular/forms';
import { TablaComponent } from './components/burbujas/prefiltro/tabla/tabla.component';
@NgModule({
  declarations: [AppComponent, ProcesadorComponent, FormularioComponent, TablaComponent],
  imports: [
    PlatformDynamicPageModule,
    ReactiveFormsModule,
    sharedCoreModules,
    sharedPlatformModules,
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
