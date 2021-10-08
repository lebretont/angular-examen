import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Evaluation} from "../../models/Evaluation";

@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrls: ['./evaluation-form.component.css']
})
export class EvaluationFormComponent implements OnInit {

  @Output() evaluationPost = new EventEmitter<Evaluation>();

  @ViewChild("evaluationForm", {static: true}) evaluationForm: NgForm | undefined

  evaluator: string = '';
  comment: string = '';
  stars: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  // Vérifie que le nombre d'étoiles entré est bien entre 0 et 3.
  isStarsValueGood(){
    return this.stars == 0 || this.stars == 1 || this.stars == 2 || this.stars == 3;
  }

  // Si le formulaire est valide on envoie un événement comme quoi l'évaluation est prête à etre envoyée.
  putEvaluation() {
    if (this.evaluationForm?.valid && this.isStarsValueGood()) {
      this.evaluationPost.emit(new Evaluation(this.evaluator, this.comment, this.stars));
    }
  }
}
