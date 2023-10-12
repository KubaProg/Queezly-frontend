import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Quiz} from "../../../shared/Quiz.model";

@Component({
  selector: 'app-quiz-tile',
  templateUrl: './quiz-tile.component.html',
  styleUrls: ['./quiz-tile.component.css']
})
export class QuizTileComponent {

  @Output('solvingPage') chosenSolvingPage = new EventEmitter<Boolean>();
  @Input('quiz') quiz?: Quiz;

  navigateToSolvingView(isSolvingView: boolean) {
    this.chosenSolvingPage.emit(isSolvingView)
  }
}
