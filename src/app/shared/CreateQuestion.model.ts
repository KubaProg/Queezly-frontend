import {CreateAnswer} from "./CreateAnswer.model";

export class CreateQuestion{

  constructor(
    public content: string,
    public answers: CreateAnswer[],
    public correctLetter: string
  ) {}
}
