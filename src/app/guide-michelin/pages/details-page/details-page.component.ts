import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Restaurant} from "../../models/Restaurant";
import {RestaurantService} from "../../services/restaurant.service";
import {Evaluation} from "../../models/Evaluation";

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  // @ts-ignore
  restaurantId: number;
  restaurant: Restaurant | null = null;

  created: string = '';
  modified: string = '';

  constructor(private _activatedRoute: ActivatedRoute, private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    // Lorsque le composant est initialisé on va demander au serveur tous les restaurants (à faire uniquement en TP !)
    // puis on va extraire le restaurant voulu grâce à son id.
    this._activatedRoute.params.subscribe( (params: Params) => {
      this.restaurantId = params['id'];
      this.restaurantService.getRestaurantList().subscribe(
        resources => {
          let rsts: Restaurant[] = resources.body ?? [];
          this.restaurant = rsts.find(value => value.id == this.restaurantId) ?? null;
        },
        err => {console.log(err)}
      );
    })
  }

  // Appelle le service pour faire une requête PUT afin d'ajouter une évaluation.
  putRestaurantEvaluation(evaluation: Evaluation) {
    if (this.restaurant != null) {
      this.restaurant.evaluations.push(evaluation);
      this.restaurantService.putRestaurant(this.restaurant).subscribe(
        resources => {
          this.created = 'Evaluation ajoutée !';
        },
        err => {console.log(err)}
      );
    }
  }

  // Appelle le service pour faire une requête PUT afin de modifier les informations du restaurant.
  putRestaurant(restaurant: Restaurant) {
    if (this.restaurant != null) {
      this.restaurant.name = restaurant.name;
      this.restaurant.address = restaurant.address;
      this.restaurantService.putRestaurant(this.restaurant).subscribe(
        resources => this.modified = 'Restaurant modifié !',
        err => {console.log(err)}
      );
    }
  }
}
