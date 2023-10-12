import {Question} from "./Question.model";

export class Quiz {
  constructor(
    public name: string,
    public category: number,
    public level: string,
    public questions: Question[]
  ) {}
}
