import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './project/landing/landing.component';
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
import {TrajectCiComponent} from './project/competenties/betrokken/traject-ci/traject-ci.component';
import {IteratiesBbsdeskComponent} from './project/competenties/ontwerpen/iteraties-bbsdesk/iteraties-bbsdesk.component';
import {InrichtingWebserverComponent} from './project/competenties/ondernemen/inrichting-webserver/inrichting-webserver.component';
import {TestimonialsComponent} from './project/testimonials/testimonials.component';
import {BeoordelingComponent} from './project/testimonials/beoordeling/beoordeling.component';
import {ConclusieComponent} from './project/conclusie/conclusie.component';
import {TerugkomdagenComponent} from './project/conclusie/terugkomdagen/terugkomdagen.component';
import {VisieAfstuderenComponent} from './project/conclusie/visie-afstuderen/visie-afstuderen.component';
import {BezoekStagiairesComponent} from './project/conclusie/bezoek-stagiaires/bezoek-stagiaires.component';

const routes: Routes = [
    { path: 'home',                         component: LandingComponent },
    { path: 'bedrijf',                      component: BedrijfComponent },
    { path: 'competenties',                 component: CompetentiesComponent},
    { path: 'testimonials',                 component: TestimonialsComponent},
    { path: 'testimonials/beoordeling',     component: BeoordelingComponent},
    { path: 'conclusie',                    component: ConclusieComponent},
    { path: 'conclusie/terugkomdagen',      component: TerugkomdagenComponent},
    { path: 'conclusie/bezoek-stagiaires',  component: BezoekStagiairesComponent},
    { path: 'conclusie/visie-afstuderen',   component: VisieAfstuderenComponent},
    { path: 'testimonials/beoordeling',     component: BeoordelingComponent},
    { path: 'ontwikkelen',                  component: OntwikkelenComponent},
        { path: 'ontwikkelen/automatiseren-workflow',       component: AutomatiserenComponent},
        { path: 'ontwikkelen/projectstructuur',             component: ProjectstructuurComponent},
        { path: 'ontwikkelen/asynchroon-programmeren',      component: AsynchroonComponent},
        { path: 'ontwikkelen/gitlab',                       component: GitlabComponent},
    { path: 'onderzoeken',                  component: OnderzoekenComponent},
        { path: 'onderzoeken/continuous-integration',       component: ContinuousIntegrationComponent},
    { path: 'ontwerpen',                    component: OntwerpenComponent},
        { path: 'ontwerpen/automatiseren-workflow',         component: AutomatiserenComponent},
        { path: 'ontwerpen/iteraties-bbsdesk',              component: IteratiesBbsdeskComponent},
    { path: 'ondernemen',                   component: OndernemenComponent},
        { path: 'ondernemen/traject-ci',                    component: TrajectCiComponent},
        { path: 'ondernemen/inrichting-webserver',          component: InrichtingWebserverComponent},
        { path: 'ondernemen/gitlab',                        component: GitlabComponent},
    { path: 'betrokken',                    component: BetrokkenComponent},
        { path: 'betrokken/traject-ci',        component: TrajectCiComponent},
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
