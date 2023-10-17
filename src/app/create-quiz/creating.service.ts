import {EventEmitter, Injectable} from '@angular/core';
import {QuestionDto} from "../shared/QuestionDto.model";
import {CreateQuestion} from "../shared/CreateQuestion.model";
import {CreateQuiz} from "../shared/CreateQuiz.model";
import {QuizInfo} from "../shared/QuizInfo.model";

@Injectable({
  providedIn: 'root'
})
export class CreatingService {


  questions: CreateQuestion[] = []
  quiz: CreateQuiz;

  isAddQuestion = new EventEmitter<boolean>();
  isCreateQuizForm = new EventEmitter<boolean>();
  quizName = new EventEmitter<string>();


  constructor() { }

  saveQuiz(){

  }

}
