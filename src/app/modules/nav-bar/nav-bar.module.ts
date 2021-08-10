import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavBarComponent } from "./nav-bar.component";

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [NavBarComponent],
  declarations: [NavBarComponent],
})
export class NavBarModule {}
