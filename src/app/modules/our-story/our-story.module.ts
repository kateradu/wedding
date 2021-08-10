import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { OurStoryRoutingModule } from "./our-story-routing.module";
import { OurStoryComponent } from "./our-story.component";

@NgModule({
  imports: [CommonModule, OurStoryRoutingModule],
  declarations: [OurStoryComponent],
})
export class OurStoryModule {}
