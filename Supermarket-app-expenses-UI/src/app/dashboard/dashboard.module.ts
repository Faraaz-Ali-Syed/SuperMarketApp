import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { DashboardComponent } from "./dashboard.component";
import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  declarations: [DashboardComponent],
  imports: [BrowserModule, NgApexchartsModule],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class AppModule {}
