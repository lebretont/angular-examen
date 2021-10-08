import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './guide-michelin/pages/main-page/main-page.component';
import { DetailsPageComponent } from './guide-michelin/pages/details-page/details-page.component';
import { RestaurantInfosComponent } from './guide-michelin/components/restaurant-infos/restaurant-infos.component';
import { RestaurantFormComponent } from './guide-michelin/components/restaurant-form/restaurant-form.component';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatButtonModule} from "@angular/material/button";
import { LineColorDirective } from './shared/directives/line-color.directive';
import {RestaurantService} from "./guide-michelin/services/restaurant.service";
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { EvaluationFormComponent } from './guide-michelin/components/evaluation-form/evaluation-form.component';
import {MyInterceptor} from "./guide-michelin/services/interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DetailsPageComponent,
    RestaurantInfosComponent,
    RestaurantFormComponent,
    LineColorDirective,
    EvaluationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    RestaurantService,
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
