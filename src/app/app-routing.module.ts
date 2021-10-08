import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./guide-michelin/pages/main-page/main-page.component";
import {DetailsPageComponent} from "./guide-michelin/pages/details-page/details-page.component";

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'details/:id', component: DetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
