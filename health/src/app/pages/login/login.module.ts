import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {LoginComponent} from "./login.component";
import {loginModuleRoutes} from "./login.routing";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule, MatFormFieldModule, MatInputModule} from "@angular/material";


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    loginModuleRoutes,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  exports: [LoginComponent],
  declarations: [LoginComponent],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule {
}
