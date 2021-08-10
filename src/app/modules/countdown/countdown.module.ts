import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CountdownComponent } from "./countdown.component";

@NgModule({
  imports: [CommonModule],
  exports: [CountdownComponent],
  declarations: [CountdownComponent],
})
export class CountdownModule {}
