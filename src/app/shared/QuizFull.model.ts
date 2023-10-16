import {QuestionDto} from "./QuestionDto.model";

export class QuizFullDto {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  creationDate: Date;
  questions: QuestionDto[];
}
