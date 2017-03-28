import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { QuestionService } from './question/shared/question.service';
import { UserService } from './user/shared/user.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { GridsterModule } from 'angular-gridster2';

import { MaterialModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { UserComponent } from './user/user.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent,
    HomeComponent,
    QuestionComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GridsterModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false })
  ],
  providers: [
    QuestionService,
    UserService,
    CookieService,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {

}
