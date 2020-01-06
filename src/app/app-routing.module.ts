import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './information/contact/contact.component';
import {InformationComponent} from './information/information.component';
import {AboutusComponent} from './information/aboutus/aboutus.component';
import {TermsandconditionsComponent} from './information/termsandconditions/termsandconditions.component';
import {WebsitetermsandconditionsComponent} from './information/websitetermsandconditions/websitetermsandconditions.component';
import {CookiespolicyComponent} from './information/cookiespolicy/cookiespolicy.component';
import {PrivacypolicyComponent} from './information/privacypolicy/privacypolicy.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'information', component: InformationComponent,
   children: [
     {path: 'aboutus', component: AboutusComponent},
     {path: 'contact', component: ContactComponent},
     {path: 'termsandconditions', component: TermsandconditionsComponent},
     {path: 'websitetermsandconditions', component: WebsitetermsandconditionsComponent},
     {path: 'cookiespolicy', component: CookiespolicyComponent},
     {path: 'privacypolicy', component: PrivacypolicyComponent}
   ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
