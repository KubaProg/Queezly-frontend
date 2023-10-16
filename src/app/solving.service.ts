import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class SolvingService {

  chosenQuizId: number;
  currentQuestionNumber: number;

  constructor(private apiService: ApiService) { }

  // provideQuizInfo(){
  //   this.apiService.getQuizById(quizId).subscribe((quiz) =>{
  //       this.quiz = quiz;
  //     }
  //   )
  // }


}
