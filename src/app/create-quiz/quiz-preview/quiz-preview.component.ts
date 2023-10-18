import {Component, OnInit} from '@angular/core';
import {CreatingService} from "../creating.service";
import {QuestionDto} from "../../shared/QuestionDto.model";
import {CreateQuestion} from "../../shared/CreateQuestion.model";

@Component({
  selector: 'app-quiz-preview',
  templateUrl: './quiz-preview.component.html',
  styleUrls: ['./quiz-preview.component.css']
})
export class QuizPreviewComponent implements OnInit{
  quizTitle: string;
  questions: CreateQuestion[] = []
  correctAnswer: string;

  constructor(private creatingService: CreatingService) {}

  ngOnInit(): void {
    this.creatingService.quizName.subscribe((name) => {
      this.quizTitle = name;
    })

    this.creatingService.updatableQuestions.subscribe((questions) => {
      this.questions = questions;
    })

    this.creatingService.correctAnswer.subscribe((answer: string) => {
      this.correctAnswer = answer;
    })
  }

  protected readonly indexedDB = indexedDB;

  deleteQuestion(content: string) {
    const indexToDelete = this.questions.findIndex((question) => question.content === content);
    if (indexToDelete !== -1) {
      this.questions.splice(indexToDelete, 1);
    }
    this.creatingService.questions = this.questions;
  }

}
