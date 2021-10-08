import { Component, OnInit } from '@angular/core';
import {RestaurantService} from "../../services/restaurant.service";
import {Restaurant} from "../../models/Restaurant";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  restaurants: Restaurant[] = [];
  created: string = '';

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurantService.getRestaurantList().subscribe(
      resources => {this.restaurants = resources.body ?? []},
      err => {console.log(err)}
    )
  }

  // Appelle le service pour faire une requête POST afin d'ajouter un restaurant.
  postRestaurant(restaurant: Restaurant) {
    this.restaurantService.postRestaurant(restaurant).subscribe(
      resources => {
        this.created = 'Restaurant ajouté !';
        this.restaurants.push(new Restaurant(resources.body!.id, restaurant.name, restaurant.address, []));
        },
      err => {console.log(err)}
    );
  }

}
