import {Component, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import {Restaurant} from "../../models/Restaurant";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent implements OnInit {

  @Output() restaurantPost = new EventEmitter<Restaurant>();

  @ViewChild("restaurantForm", {static: true}) restaurantForm: NgForm | undefined

  name: string = '';
  address: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  // Si le formulaire est valide on envoie un événement comme quoi le restaurant est prêt à être envoyé au serveur.
  postRestaurant() {
    if (this.restaurantForm?.valid) {
      this.restaurantPost.emit(new Restaurant(0, this.name, this.address, []));
    }
  }

}
