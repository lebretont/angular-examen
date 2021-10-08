import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Restaurant} from "../models/Restaurant";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private httpClient: HttpClient) { }

  // Effectue une requête GET au serveur pour récupérer la liste des restaurants.
  getRestaurantList(): Observable<HttpResponse<Restaurant[]>> {
    return this.httpClient
      .get<Restaurant[]>("http://localhost:3000/restaurants", { observe: 'response' });
  }

  // Effectue une requête POST au serveur pour ajouter un restaurant.
  postRestaurant(restaurant: Restaurant): Observable<HttpResponse<Restaurant>> {
    return this.httpClient.post<Restaurant>("http://localhost:3000/restaurants", restaurant, {observe: 'response'});
  }

  // Effectue une requête PUT au serveur pour modifier un restaurant.
  putRestaurant(restaurant: Restaurant): Observable<HttpResponse<Restaurant>> {
    return this.httpClient.put<Restaurant>("http://localhost:3000/restaurants/" + restaurant.id, restaurant, {observe: 'response'});
  }
}
