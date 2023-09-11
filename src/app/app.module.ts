import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HomeDetailsComponent } from './components/home-details/home-details.component';
import { YearsComponent } from './components/years/years.component';
import { SemestersComponent } from './components/semesters/semesters.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { HomeDetailsCardComponent } from './components/home-details-card/home-details-card.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { McFunctionsComponent } from './pages/mc-functions/mc-functions.component';
import { McCountingComponent } from './pages/mc-counting/mc-counting.component';
import { CsMemoComponent } from './pages/cs-memo/cs-memo.component';
import { CsEmailComponent } from './pages/cs-email/cs-email.component';
import { CsNonDiscriminatoryComponent } from './pages/cs-non-discriminatory/cs-non-discriminatory.component';
import { CsFormalLanguageComponent } from './pages/cs-formal-language/cs-formal-language.component';
import { McIntegrationComponent } from './pages/mc-integration/mc-integration.component';
import { McDifferentiationComponent } from './pages/mc-differentiation/mc-differentiation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HomeDetailsComponent,
    YearsComponent,
    SemestersComponent,
    SubjectsComponent,
    LessonsComponent,
    HomeDetailsCardComponent,
    NotFoundComponent,
    McFunctionsComponent,
    McCountingComponent,
    CsMemoComponent,
    CsEmailComponent,
    CsNonDiscriminatoryComponent,
    CsFormalLanguageComponent,
    McIntegrationComponent,
    McDifferentiationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
