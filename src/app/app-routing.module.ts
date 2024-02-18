import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioPageComponent } from './header-page/pages/portfolio-page/portfolio-page.component';
import { FormationPageComponent } from './header-page/pages/formation-page/formation-page.component';

const routes: Routes = [
  {
    path: "",
    component: PortfolioPageComponent
  },
  {

    path: "formations",
    component: FormationPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
