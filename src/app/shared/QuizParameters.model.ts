import {Question} from "./Question.model";

export class QuizParameters{
  constructor(
    public title: string,
    public category: string,
    public difficulty: string,
  ) {}
}
