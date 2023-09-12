import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { YearsComponent } from './components/years/years.component';
import { SemestersComponent } from './components/semesters/semesters.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { McCountingComponent } from './pages/mc-counting/mc-counting.component';
import { CsMemoComponent } from './pages/cs-memo/cs-memo.component';
import { CsEmailComponent } from './pages/cs-email/cs-email.component';
import { CsNonDiscriminatoryComponent } from './pages/cs-non-discriminatory/cs-non-discriminatory.component';
import { McFunctionsComponent } from './pages/mc-functions/mc-functions.component';
import { McIntegrationComponent } from './pages/mc-integration/mc-integration.component';
import { McDifferentiationComponent } from './pages/mc-differentiation/mc-differentiation.component';
import { CsFormalLanguageComponent } from './pages/cs-formal-language/cs-formal-language.component';
import { CsTensesComponent } from './pages/cs-tenses/cs-tenses.component';
import { IpStructuresComponent } from './pages/ip-structures/ip-structures.component';
import { McBooleanComponent } from './pages/mc-boolean/mc-boolean.component';
import { McLogicGatesComponent } from './pages/mc-logic-gates/mc-logic-gates.component';
import { CsPartsOfSpeechComponent } from './pages/cs-parts-of-speech/cs-parts-of-speech.component';
import { IcsComputerGenComponent } from './pages/ics-computer-gen/ics-computer-gen.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    children: [
      {path: '', component: YearsComponent},
      {path: ':year', component: SemestersComponent},
      {path: ':year/:sem', component: SubjectsComponent},
      {path: ':year/:sem/:subject', component: LessonsComponent},
    ]
  }, 
  {path: 'year-1/sem-1/IP/structures', component: IpStructuresComponent},

  {path: 'year-1/sem-1/ICS/computer-generation', component: IcsComputerGenComponent},

  {path: 'year-1/sem-1/MC/counting', component: McCountingComponent},
  {path: 'year-1/sem-1/MC/logic-gates', component: McLogicGatesComponent},
  {path: 'year-1/sem-1/MC/boolean', component: McBooleanComponent},
  {path: 'year-1/sem-1/MC/functions', component: McFunctionsComponent},
  {path: 'year-1/sem-1/MC/integration', component: McIntegrationComponent},
  {path: 'year-1/sem-1/MC/differentiation', component: McDifferentiationComponent},

  {path: 'year-1/sem-1/CS/memo', component: CsMemoComponent},
  {path: 'year-1/sem-1/CS/email', component: CsEmailComponent},
  {path: 'year-1/sem-1/CS/tenses', component: CsTensesComponent},
  {path: 'year-1/sem-1/CS/parts-of-speech', component: CsPartsOfSpeechComponent},
  {path: 'year-1/sem-1/CS/formal-language', component: CsFormalLanguageComponent},
  {path: 'year-1/sem-1/CS/non-discriminatory', component: CsNonDiscriminatoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
