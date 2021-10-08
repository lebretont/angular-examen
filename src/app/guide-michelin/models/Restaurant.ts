import {Evaluation} from "./Evaluation";

export class Restaurant {
  id: number;
  name: string;
  address: string;
  evaluations : Evaluation[] = [];

  constructor(userId: number, name: string, address: string, evaluations : Evaluation[]) {
    this.id = userId;
    this.name = name;
    this.address = address;
    this.evaluations = evaluations;
  }
}
