import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from "../../models/Restaurant";
import {Router} from "@angular/router";

@Component({
  selector: 'app-restaurant-infos[restaurant]',
  templateUrl: './restaurant-infos.component.html',
  styleUrls: ['./restaurant-infos.component.css']
})
export class RestaurantInfosComponent implements OnInit {

  // @ts-ignore
  @Input() restaurant: Restaurant;

  constructor() { }

  ngOnInit(): void {
  }

  // Calcul de la moyenne des étoiles grâce à des lambdas.
  get meanStars() {
    // Affiche '/' s'il n'y a pas d'évaluations.
    if (this.restaurant!.evaluations.length == 0) return '/';
    let numerator = this.restaurant!.evaluations.map(e=>e.stars).reduce((sum, currentValue) => sum + currentValue);
    return numerator / this.restaurant!.evaluations.length;
  }

}
