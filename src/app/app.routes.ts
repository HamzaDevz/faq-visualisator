import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'question', component: QuestionComponent },
];

