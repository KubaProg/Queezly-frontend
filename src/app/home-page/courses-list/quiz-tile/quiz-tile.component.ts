import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Quiz} from "../../../shared/Quiz.model";
import {QuizInfo} from "../../../shared/QuizInfo.model";
import {ApiService} from "../../../api.service";
import {SolvingService} from "../../../solving.service";

@Component({
  selector: 'app-quiz-tile',
  templateUrl: './quiz-tile.component.html',
  styleUrls: ['./quiz-tile.component.css']
})
export class QuizTileComponent {

  constructor(private solvingService: SolvingService) {}

  @Output('solvingPage') chosenSolvingPage = new EventEmitter<Boolean>();
  @Input('quiz') quiz?: QuizInfo;

  navigateToSolvingView(isSolvingView: boolean, quizId: number) {
    this.solvingService.chosenQuizId = quizId;
    this.chosenSolvingPage.emit(isSolvingView)
  }
}
