import { NgModule } from "@angular/core";
import { NavBarModule } from "../nav-bar/nav-bar.module";
import { ShellComponent } from "./shell.component";
import { ShellRoutingModule } from "./shell-routing.module";
import { HeaderBannerModule } from "../header-banner/header-banner.module";
import { BackgroundSplashModule } from "../background-splash/background-splash.module";

@NgModule({
  imports: [
    ShellRoutingModule,
    BackgroundSplashModule,
    NavBarModule,
    HeaderBannerModule,
  ],
  declarations: [ShellComponent],
})
export class ShellModule {}
