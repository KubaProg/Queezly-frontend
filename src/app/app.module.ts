import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CourseCockpitComponent } from './home-page/course-cockpit/course-cockpit.component';
import { CoursesListComponent } from './home-page/courses-list/courses-list.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { QuizPreviewComponent } from './create-quiz/quiz-preview/quiz-preview.component';
import { CreateQuizForm } from './create-quiz/createQuiz-form/createQuiz-form';
import { AddQuestionComponent } from './create-quiz/add-question/add-question.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    CourseCockpitComponent,
    CoursesListComponent,
    CreateQuizComponent,
    QuizPreviewComponent,
    CreateQuizForm,
    AddQuestionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
