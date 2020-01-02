import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './information/contact/contact.component';
import {InformationComponent} from './information/information.component';
import {AboutusComponent} from './information/aboutus/aboutus.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'information', component: InformationComponent,
   children: [
     {path: 'aboutus', component: AboutusComponent},
     {path: 'contact', component: ContactComponent}
   ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
