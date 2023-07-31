import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Template1Component } from './components/pages/template1/template1.component';
import { Template2Component } from './components/pages/template2/template2.component';
import { Template3Component } from './components/pages/template3/template3.component';
import { Template4Component } from './components/pages/template4/template4.component';
import { PagesComponent } from './components/pages/pages.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { Template5Component } from './components/pages/template5/template5.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Template1Component,
    Template2Component,
    Template3Component,
    Template4Component,
    PagesComponent,
    SidebarComponent,
    Template5Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
