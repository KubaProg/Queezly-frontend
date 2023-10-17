import {CreateQuestion} from "./CreateQuestion.model";

export class CreateQuiz{
  constructor(
  public  title: string,
  public category: string,
  public difficulty: string,
  public description: string,
  public questions: CreateQuestion[]
  ) {}
}
