import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CardComponent } from './pages/card/card.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { BlocksComponent } from './pages/blocks/blocks.component';
import { FormsComponent } from './pages/forms/forms.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    HeaderComponent,
    SidebarComponent,
    PagesComponent,
    DashboardComponent,
    CardComponent,
    PricingComponent,
    BlocksComponent,
    FormsComponent,
    FooterComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
