import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbSidebarModule, NbInputModule, NbListModule, NbCardModule, NbUserModule, NbMenuModule, NbActionsModule, NbSpinnerModule, NbDialogModule } from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    // NbLayoutModule,
    NbSidebarModule,
    NbInputModule,
    NbListModule,
    NbCardModule,
    NbUserModule,
    NbMenuModule,
    NbActionsModule,
    NbSpinnerModule,
    NbDialogModule.forRoot(),
  ],
  exports: [
    NbSidebarModule,
    NbInputModule,
    NbListModule,
    NbCardModule,
    NbUserModule,
    NbMenuModule,
    NbActionsModule,
    NbSpinnerModule,
    NbDialogModule,
  ],
  providers: [],
})
export class NebularModule { }
