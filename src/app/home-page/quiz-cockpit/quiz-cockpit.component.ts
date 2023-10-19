import { Component } from '@angular/core';
import {ApiService} from "../../api.service";
import {QuizInfo} from "../../shared/QuizInfo.model";
import {QuizParameters} from "../../shared/QuizParameters.model";
import {Quiz} from "../../shared/Quiz.model";

@Component({
  selector: 'app-quiz-cockpit',
  templateUrl: './quiz-cockpit.component.html',
  styleUrls: ['./quiz-cockpit.component.css']
})
export class QuizCockpitComponent {
  selectedCategory: string;
  selectedLevel: string;
  quizName: string;
  parameters: QuizParameters;
  searchedQuizzes: QuizInfo[];



  constructor(private apiService: ApiService) {}

  onSearchQuizes(selectedCategory: string, selectedLevel: string, quizName: string) {
    // Check if selectedCategory and selectedLevel are empty, and if so, set them to undefined
    if (selectedCategory === '') {
      selectedCategory = undefined;
    }
    if (selectedLevel === '') {
      selectedLevel = undefined;
    }

    this.parameters = new QuizParameters(quizName, selectedCategory, selectedLevel);
    this.apiService.getQuizzesByRequirements(this.parameters).subscribe(
      (response) => {
        this.searchedQuizzes = response;
        this.apiService.updatedQuizzes.emit(response);
      }
    );
  }



}
