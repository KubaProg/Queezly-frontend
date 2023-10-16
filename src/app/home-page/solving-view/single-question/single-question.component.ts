import {Component, Input} from '@angular/core';
import {QuestionDto} from "../../../shared/QuestionDto.model";

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.css']
})
export class SingleQuestionComponent {

  @Input() question: QuestionDto;
  @Input() counter: number;

  saveSelectedValue(){

  }


}
