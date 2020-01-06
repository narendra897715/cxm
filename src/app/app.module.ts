import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './information/contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { InformationComponent } from './information/information.component';
import { AboutusComponent } from './information/aboutus/aboutus.component';
import { TermsandconditionsComponent } from './information/termsandconditions/termsandconditions.component';
import { WebsitetermsandconditionsComponent } from './information/websitetermsandconditions/websitetermsandconditions.component';
import { PrivacypolicyComponent } from './information/privacypolicy/privacypolicy.component';
import { CookiespolicyComponent } from './information/cookiespolicy/cookiespolicy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    InformationComponent,
    AboutusComponent,
    TermsandconditionsComponent,
    WebsitetermsandconditionsComponent,
    PrivacypolicyComponent,
    CookiespolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
