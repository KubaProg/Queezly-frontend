import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-quiz-tile',
  templateUrl: './quiz-tile.component.html',
  styleUrls: ['./quiz-tile.component.css']
})
export class QuizTileComponent {

  @Output('solvingPage') chosenSolvingPage = new EventEmitter<Boolean>();

  navigateToSolvingView(isSolvingView: boolean) {
    this.chosenSolvingPage.emit(isSolvingView)
  }
}
