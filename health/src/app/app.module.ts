import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppRoutingModule} from './core/routing/app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from "./material/material.module";
import {SharedModule} from "./shared/shared.module";
import {HomeComponent} from "./pages/home/home.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ValidatorService} from "./core/services/validator.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    SharedModule,
  ],
  providers: [ValidatorService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
