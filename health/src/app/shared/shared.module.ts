import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {NotFoundComponent} from "./components/404/not-found.component";
import {PublicLayoutComponent} from "./layout/public-layout/public-layout.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    RouterModule
  ],
  exports: [],
  declarations: [
    NotFoundComponent,
    PublicLayoutComponent,
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
}
