export class Evaluation {
  evaluator: string;
  comment: string;
  stars : number;

  constructor(evaluator: string, comment: string, stars : number) {
    this.evaluator = evaluator;
    this.comment = comment;
    this.stars = stars;
  }
}
