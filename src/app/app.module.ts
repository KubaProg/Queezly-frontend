import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { QuizCockpitComponent } from './home-page/quiz-cockpit/quiz-cockpit.component';
import { QuizListComponent } from './home-page/courses-list/quiz-list.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { QuizPreviewComponent } from './create-quiz/quiz-preview/quiz-preview.component';
import { CreateQuizForm } from './create-quiz/createQuiz-form/createQuiz-form';
import { AddQuestionComponent } from './create-quiz/add-question/add-question.component';
import { SolvingViewComponent } from './home-page/solving-view/solving-view.component';
import { QuizTileComponent } from './home-page/courses-list/./quiz-tile/quiz-tile.component';
import {HttpClientModule} from "@angular/common/http";
import { FinishComponent } from './home-page/solving-view/finish/finish.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  {path: '', component:HomePageComponent},
  // {path: 'users', component:UsersComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    QuizCockpitComponent,
    QuizListComponent,
    CreateQuizComponent,
    QuizPreviewComponent,
    CreateQuizForm,
    AddQuestionComponent,
    SolvingViewComponent,
    QuizTileComponent,
    FinishComponent,
    QuizListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
