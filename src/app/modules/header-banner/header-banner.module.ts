import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderBannerComponent } from "./header-banner.component";

@NgModule({
  imports: [CommonModule],
  exports: [HeaderBannerComponent],
  declarations: [HeaderBannerComponent],
})
export class HeaderBannerModule {}
