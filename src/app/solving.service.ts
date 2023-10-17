import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class SolvingService {

  chosenQuizId: number;
  percentageResult: number = 0;
  userAnswers: boolean[] = []

  constructor(private apiService: ApiService) { }


  addUserAnswer(answer: boolean){
    this.userAnswers.push(answer)
  }

  calculateResult(quizLength: number){
    let points = 0;
    this.userAnswers.forEach((answer) => {
      if(answer===true){
        points++;
      }
    })
    this.percentageResult = points/quizLength;
  }


}
