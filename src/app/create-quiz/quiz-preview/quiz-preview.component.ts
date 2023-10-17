import {Component, OnInit} from '@angular/core';
import {CreatingService} from "../creating.service";

@Component({
  selector: 'app-quiz-preview',
  templateUrl: './quiz-preview.component.html',
  styleUrls: ['./quiz-preview.component.css']
})
export class QuizPreviewComponent implements OnInit{
  quizTitle: string;

  constructor(private creatingService: CreatingService) {}

  ngOnInit(): void {
    this.creatingService.quizName.subscribe((name) => {
      this.quizTitle = name;
    })
  }

}
