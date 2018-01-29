import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';

import {AppComponent} from './app.component';
import {SignupComponent} from './signup/signup.component';
import {LandingComponent} from './project/landing/landing.component';
import {ProfileComponent} from './profile/profile.component';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {FooterComponent} from './shared/footer/footer.component';

import {HomeModule} from './home/home.module';
import {BedrijfComponent} from './project/bedrijf/bedrijf.component';
import { CompetentiesComponent } from './project/competenties/competenties.component';
import { OnderzoekenComponent } from './project/competenties/onderzoeken/onderzoeken.component';
import { OntwikkelenComponent } from './project/competenties/ontwikkelen/ontwikkelen.component';
import { OntwerpenComponent } from './project/competenties/ontwerpen/ontwerpen.component';
import { OndernemenComponent } from './project/competenties/ondernemen/ondernemen.component';
import { BetrokkenComponent } from './project/competenties/betrokken/betrokken.component';
import { AutomatiserenComponent } from './project/competenties/ontwikkelen/automatiseren/automatiseren.component';
import { ProjectstructuurComponent } from './project/competenties/ontwikkelen/projectstructuur/projectstructuur.component';
import { AsynchroonComponent } from './project/competenties/ontwikkelen/asynchroon/asynchroon.component';
import { GitlabComponent } from './project/competenties/ontwikkelen/gitlab/gitlab.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { ContinuousIntegrationComponent } from './project/competenties/onderzoeken/continuous-integration/continuous-integration.component';
import { TrajectCiComponent } from './project/competenties/betrokken/traject-ci/traject-ci.component';
import { IteratiesBbsdeskComponent } from './project/competenties/ontwerpen/iteraties-bbsdesk/iteraties-bbsdesk.component';
import { InrichtingWebserverComponent } from './project/competenties/ondernemen/inrichting-webserver/inrichting-webserver.component';

@NgModule({
    declarations: [
        AppComponent,
        SignupComponent,
        LandingComponent,
        ProfileComponent,
        NavbarComponent,
        FooterComponent,
        BedrijfComponent,
        CompetentiesComponent,
        OnderzoekenComponent,
        OntwikkelenComponent,
        OntwerpenComponent,
        OndernemenComponent,
        BetrokkenComponent,
        AutomatiserenComponent,
        ProjectstructuurComponent,
        AsynchroonComponent,
        GitlabComponent,
        ContinuousIntegrationComponent,
        TrajectCiComponent,
        IteratiesBbsdeskComponent,
        InrichtingWebserverComponent
    ],
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        AppRoutingModule,
        HomeModule
    ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
