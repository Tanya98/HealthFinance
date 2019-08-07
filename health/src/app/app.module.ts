import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppRoutingModule} from './core/routing/app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from "./material/material.module";
import {SharedModule} from "./shared/shared.module";
import {HomeComponent} from "./pages/home/home.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ValidatorService} from "./core/services/validator.service";
import {NebularModule} from "./nebular/nebular.module";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "./core/services/user.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    NebularModule,
    SharedModule,
  ],
  providers: [ValidatorService, UserService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
