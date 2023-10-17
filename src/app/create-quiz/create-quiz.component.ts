import {Component, OnInit} from '@angular/core';
import {CreatingService} from "./creating.service";

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit{

  constructor(private creatingService: CreatingService) {}

  isAddQuestion: boolean = false;
  isCreateQuizForm: boolean = true;

  ngOnInit(): void {

    this.creatingService.isAddQuestion.subscribe((isAdd)=>{
      this.isAddQuestion = isAdd;
    });

    this.creatingService.isCreateQuizForm.subscribe((isCreate)=>{
      this.isCreateQuizForm = isCreate;
    });

  }

}
