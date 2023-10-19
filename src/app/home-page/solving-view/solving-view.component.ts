import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api.service";
import {QuestionDto} from "../../shared/QuestionDto.model";
import {SolvingService} from "../../solving.service";
import {filter} from "rxjs";
import {AnswerDto} from "../../shared/AnswerDto.model";

@Component({
  selector: 'app-solving-view',
  templateUrl: './solving-view.component.html',
  styleUrls: ['./solving-view.component.css']
})
export class SolvingViewComponent implements OnInit{

  constructor(private apiService: ApiService, private solvingService: SolvingService) {}

  questions: QuestionDto[];
  chosenQuizId: number;
  counter : number = 1;
  currentQuestion: QuestionDto;
  finished: boolean = false;
  userAnswerIds: number[];
  selectedAnswer: AnswerDto;

  ngOnInit(): void {
    this.chosenQuizId = this.solvingService.chosenQuizId;
    this.apiService.getQuizById(this.chosenQuizId).subscribe((quizData) => {
      this.questions = quizData.questions;
      this.currentQuestion = this.questions.at(this.counter-1);
    })
  }

  // changeToPrevious(){
  //   if(this.counter!=1){
  //     this.counter--;
  //   }
  //   this.currentQuestion = this.questions.at(this.counter-1);
  // }

  changeToNext(){

    this.solvingService.addUserAnswer(this.selectedAnswer.correct);

    if(this.counter === this.questions.length){
      this.solvingService.calculateResult(this.questions.length)
      this.finished = true;
    }

    this.counter++;

    this.currentQuestion = this.questions.at(this.counter-1);

    this.selectedAnswer.correct = false;
  }

}
