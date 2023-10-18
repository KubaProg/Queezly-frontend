import { Component } from '@angular/core';
import {CreateQuestion} from "../../shared/CreateQuestion.model";
import {CreateAnswer} from "../../shared/CreateAnswer.model";
import {CreatingService} from "../creating.service";
import {ApiService} from "../../api.service";

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent {

  constructor(private creatingService: CreatingService, private apiService: ApiService) {}

  question: string;
  answerA: string;
  answerB: string;
  answerC: string;
  answerD: string;
  correctAnswer: string;
  chosenCorrect: string;
  answers: CreateAnswer[] =[];

  onAddQuestion(question: string, answerA: string, answerB: string, answerC: string, answerD: string, correctAnswer: string) {
    this.chosenCorrect = this.getCorrect(answerA,answerB,answerC,answerD,correctAnswer)

    this.answers.push(new CreateAnswer(answerA,false));
    this.answers.push(new CreateAnswer(answerB,false));
    this.answers.push(new CreateAnswer(answerC,false));
    this.answers.push(new CreateAnswer(answerD,false));

    this.answers.forEach(((answer) => {
      if(answer.content===this.chosenCorrect){
        answer.correct = true;
        this.creatingService.correctAnswer.emit(answer.content)
      }
    }))

    this.creatingService.questions.push(new CreateQuestion(question,this.answers,this.chosenCorrect))
    this.creatingService.updatableQuestions.emit(this.creatingService.questions);

    this.clear();
  }



  getCorrect(answerA: string, answerB: string, answerC: string, answerD: string, correctAnswer: string) : string{
    if(correctAnswer==='A'){
      return answerA;
    }else if(correctAnswer==='B'){
      return answerB;
    }else if(correctAnswer==='C')
    {
      return answerC;
    }else{
      return answerD;
    }
  }

  clear(){
    this.question = '';
    this.answerA = '';
    this.answerB = '';
    this.answerC = '';
    this.answerD = '';
    this.correctAnswer = 'A';
    this.answers = [];
  }

  createQuiz() {
    this.creatingService.quiz.questions = this.creatingService.questions;
    this.apiService.createQuiz(this.creatingService.quiz).subscribe();
    window.location.reload(); // Reload the application
  }
}
