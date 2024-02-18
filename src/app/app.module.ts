import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { PortfolioPageComponent } from './header-page/pages/portfolio-page/portfolio-page.component';
import { RouterModule } from '@angular/router';
import { FormationPageComponent } from './header-page/pages/formation-page/formation-page.component';
import { ContactPageComponent } from './header-page/pages/contact-page/contact-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderPageComponent,
    PortfolioPageComponent,
    FormationPageComponent,
    ContactPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
