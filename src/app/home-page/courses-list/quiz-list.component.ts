import {Component, EventEmitter, Output} from '@angular/core';
import {Question} from "../../shared/Question.model";
import {Quiz} from "../../shared/Quiz.model";

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

  questions1: Question[] = [
    new Question(
      "What is the capital of France?",
      "London",
      "Paris",
      "Berlin",
      "Madrid",
      "Paris"
    ),
    new Question(
      "Which planet is known as the Red Planet?",
      "Earth",
      "Mars",
      "Jupiter",
      "Venus",
      "Mars"
    ),
    // Add more questions for quiz 1
  ];

  questions2: Question[] = [
    new Question(
      "What is the largest mammal on Earth?",
      "Elephant",
      "Giraffe",
      "Blue Whale",
      "Kangaroo",
      "Blue Whale"
    ),
    new Question(
      "Which gas do plants absorb from the atmosphere?",
      "Oxygen",
      "Carbon Dioxide",
      "Nitrogen",
      "Hydrogen",
      "Carbon Dioxide"
    ),
  ];

  questions3: Question[] =[
    new Question(
      "What is it like to live in Marbella??",
      "Elephant",
      "Giraffe",
      "Very very expensive bed",
      "Kangaroo",
      "Very very expensive bed"
    ),
    new Question(
      "Who is Ted Bundy?",
      "Oxygen",
      "Carbon Dioxide",
      "Nitrogen",
      "You can always look better",
      "You can always look better"
    ),
  ];

  quizzes: Quiz[] = [
    new Quiz("Quiz 1", 1, "Easy", this.questions1),
    new Quiz("Quiz 2", 2, "Medium", this.questions2),
    new Quiz("Quiz 3", 3, "Hard", this.questions3),
    new Quiz("Quiz 4", 3, "Hard", this.questions3),
    new Quiz("Quiz 5", 3, "Hard", this.questions3),
    new Quiz("Quiz 6", 3, "Hard", this.questions3),
  ];


}
