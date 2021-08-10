import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TravelRoutingModule } from "./travel-routing.module";
import { TravelComponent } from "./travel.component";

@NgModule({
  imports: [CommonModule, TravelRoutingModule],
  declarations: [TravelComponent],
})
export class TravelModule {}
