import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TravelComponent } from "./travel.component";

const routes: Routes = [
  {
    path: "",
    component: TravelComponent,
  },
];
export const TravelRouting = RouterModule.forChild(routes);

@NgModule({
  imports: [TravelRouting],
  exports: [RouterModule],
})
export class TravelRoutingModule {}
