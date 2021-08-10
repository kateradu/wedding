import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShellComponent } from "./shell.component";

const ShellRoutes: Routes = [
  {
    path: "",
    component: ShellComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "home",
      },
      {
        path: "home",
        loadChildren: () =>
          import("../home/home.module").then((m) => m.HomeModule),
      },
      {
        path: "our-story",
        loadChildren: () =>
          import("../our-story/our-story.module").then((m) => m.OurStoryModule),
      },
      {
        path: "travel",
        loadChildren: () =>
          import("../travel/travel.module").then((m) => m.TravelModule),
      },
      {
        path: "activities",
        loadChildren: () =>
          import("../activities/activities.module").then(
            (m) => m.ActivitiesModule
          ),
      },
    ],
  },
];

export const ShellRouting = RouterModule.forChild(ShellRoutes);

@NgModule({
  imports: [ShellRouting],
  exports: [RouterModule],
})
export class ShellRoutingModule {}
