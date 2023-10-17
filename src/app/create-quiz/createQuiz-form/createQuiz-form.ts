import { Component } from '@angular/core';
import {CreatingService} from "../creating.service";
import {CreateQuiz} from "../../shared/CreateQuiz.model";

@Component({
  selector: 'app-createQuiz-form',
  templateUrl: './createQuiz-form.html',
  styleUrls: ['./createQuiz-form.css']
})
export class CreateQuizForm {
  selectedCategory: string;
  selectedLevel: string;
  quizName: string;
  quizDescription: string;

  constructor(private creatingService: CreatingService) {}
  onSaveQuiz(selectedCategory: string, selectedLevel: string, quizName: string, quizDescription: string) {
    this.creatingService.quiz = new CreateQuiz(quizName,selectedCategory,selectedLevel,quizDescription,[])
    this.creatingService.isAddQuestion.emit(true);
    this.creatingService.isCreateQuizForm.emit(false);
    this.creatingService.quizName.emit(quizName);
  }
}
