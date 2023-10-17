import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiService} from "../../api.service";
import {QuizInfo} from "../../shared/QuizInfo.model";

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit{

quizzes: QuizInfo[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getQuizzes().subscribe((data) => {
      this.quizzes = data;
    });

    this.apiService.updatedQuizzes.subscribe((response: QuizInfo[]) => {
      this.quizzes = response;
    })

  }

  @Output('solvingPage') chosenSolvingPage = new EventEmitter<Boolean>();

  navigateToSolvingView(isSolvingView: Boolean) {
    this.chosenSolvingPage.emit(isSolvingView)
  }

}
