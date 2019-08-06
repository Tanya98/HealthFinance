import {NgModule} from '@angular/core';
import {LoginComponent} from "./login.component";
import {loginModuleRoutes} from "./login.routing";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material";


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    loginModuleRoutes,
    MatFormFieldModule,
  ],
  exports: [LoginComponent],
  declarations: [LoginComponent],
  providers: [],
})
export class LoginModule {
}
