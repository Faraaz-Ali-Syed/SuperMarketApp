import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { SettingsComponent } from "./settings.component";

@NgModule({
  declarations: [SettingsComponent],
  imports: [BrowserModule, NgApexchartsModule],
  providers: [],
  bootstrap: [SettingsComponent]
})
export class AppModule {}