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
import {AutomatiserenComponent} from './project/competenties/ontwikkelen/automatiseren/automatiseren.component';
import {ProjectstructuurComponent} from './project/competenties/ontwikkelen/projectstructuur/projectstructuur.component';
import {AsynchroonComponent} from './project/competenties/ontwikkelen/asynchroon/asynchroon.component';
import {GitlabComponent} from './project/competenties/ontwikkelen/gitlab/gitlab.component';
import {ContinuousIntegrationComponent} from './project/competenties/onderzoeken/continuous-integration/continuous-integration.component';
import {TrajectCiComponent} from "./project/competenties/betrokken/traject-ci/traject-ci.component";
import {IteratiesBbsdeskComponent} from "./project/competenties/ontwerpen/iteraties-bbsdesk/iteraties-bbsdesk.component";
import {InrichtingWebserverComponent} from "./project/competenties/ondernemen/inrichting-webserver/inrichting-webserver.component";

const routes: Routes = [
    { path: 'home',             component: LandingComponent },
    { path: 'bedrijf',          component: BedrijfComponent },
    { path: 'competenties',     component: CompetentiesComponent},
    { path: 'ontwikkelen',      component: OntwikkelenComponent},
        { path: 'ontwikkelen/automatiseren-workflow',       component: AutomatiserenComponent},
        { path: 'ontwikkelen/projectstructuur',             component: ProjectstructuurComponent},
        { path: 'ontwikkelen/asynchroon-programmeren',      component: AsynchroonComponent},
        { path: 'ontwikkelen/gitlab',                       component: GitlabComponent},
    { path: 'onderzoeken',      component: OnderzoekenComponent},
        { path: 'onderzoeken/continuous-integration',       component: ContinuousIntegrationComponent},
    { path: 'ontwerpen',        component: OntwerpenComponent},
        { path: 'ontwerpen/automatiseren-workflow',         component: AutomatiserenComponent},
        { path: 'ontwerpen/iteraties-bbsdesk',              component: IteratiesBbsdeskComponent},
    { path: 'ondernemen',       component: OndernemenComponent},
        { path: 'ondernemen/traject-ci',                    component: TrajectCiComponent},
        { path: 'ondernemen/inrichting-webserver',          component: InrichtingWebserverComponent},
        { path: 'ondernemen/gitlab',                        component: GitlabComponent},
    { path: 'betrokken',        component: BetrokkenComponent},
        { path: 'betrokken/traject-ci',        component: TrajectCiComponent},
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
