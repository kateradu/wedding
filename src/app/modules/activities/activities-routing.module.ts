import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActivitiesComponent } from "./activities.component";

const routes: Routes = [
  {
    path: "",
    component: ActivitiesComponent,
  },
];
export const ActivitiesRouting = RouterModule.forChild(routes);

@NgModule({
  imports: [ActivitiesRouting],
  exports: [RouterModule],
})
export class ActivitiesRoutingModule {}
