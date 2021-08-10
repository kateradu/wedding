import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OurStoryComponent } from "./our-story.component";

const routes: Routes = [
  {
    path: "",
    component: OurStoryComponent,
  },
];
export const OurStoryRouting = RouterModule.forChild(routes);

@NgModule({
  imports: [OurStoryRouting],
  exports: [RouterModule],
})
export class OurStoryRoutingModule {}
