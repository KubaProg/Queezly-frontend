import {CreateQuestion} from "./CreateQuestion.model";

export class CreateQuiz{
  title: string;
  category: string;
  difficulty: string;
  questions: CreateQuestion[]
}
