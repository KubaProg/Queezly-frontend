import {AnswerDto} from "./AnswerDto.model";

export class QuestionDto{
  id: number;
  content: string;
  answers: AnswerDto[]
}
