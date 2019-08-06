import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from "../../shared/components/404/not-found.component";
import {PublicLayoutComponent} from "../../shared/layout/public-layout/public-layout.component";

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../pages/login/login.module').then(m => m.LoginModule),
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
