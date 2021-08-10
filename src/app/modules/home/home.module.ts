import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { CountdownModule } from "../countdown/countdown.module";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
  imports: [CommonModule, HomeRoutingModule, CountdownModule],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {}
