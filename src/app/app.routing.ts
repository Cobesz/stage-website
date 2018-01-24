import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './project/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import {BedrijfComponent} from './project/bedrijf/bedrijf.component';
import {CompetentiesComponent} from './project/competenties/competenties.component';
import {OntwikkelenComponent} from './project/competenties/ontwikkelen/ontwikkelen.component';
import {OnderzoekenComponent} from './project/competenties/onderzoeken/onderzoeken.component';
import {OntwerpenComponent} from './project/competenties/ontwerpen/ontwerpen.component';
import {OndernemenComponent} from './project/competenties/ondernemen/ondernemen.component';
import {BetrokkenComponent} from './project/competenties/betrokken/betrokken.component';

const routes: Routes = [
    { path: 'home',             component: LandingComponent },
    { path: 'bedrijf',          component: BedrijfComponent },
    { path: 'competenties',     component: CompetentiesComponent},
    { path: 'ontwikkelen',      component: OntwikkelenComponent},
    { path: 'onderzoeken',      component: OnderzoekenComponent},
    { path: 'ontwerpen',        component: OntwerpenComponent},
    { path: 'ondernemen',       component: OndernemenComponent},
    { path: 'betrokken',        component: BetrokkenComponent},
    { path: 'voorbeeld',        component: HomeComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
