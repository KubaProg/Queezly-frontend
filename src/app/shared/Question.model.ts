export class Question {
  constructor(
    public content: string,
    public optionA: string,
    public optionB: string,
    public optionC: string,
    public optionD: string,
    public correctOption: string
  ) {}
}
