import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent {



  @Output('solvingPage') chosenSolvingPage = new EventEmitter<Boolean>();

  navigateToSolvingView(isSolvingView: Boolean) {
    this.chosenSolvingPage.emit(isSolvingView)
  }
}
