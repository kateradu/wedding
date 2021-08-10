import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
];
export const HomeRouting = RouterModule.forChild(routes);

@NgModule({
  imports: [HomeRouting],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
