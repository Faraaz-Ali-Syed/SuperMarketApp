import { Component, ViewChild } from "@angular/core";

import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexChart,
  ApexPlotOptions,
  ApexLegend,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  colors: string[];
};


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Categories",
          data: [
            {
              x: "Personal & Hygiene",
              y: 20
            },
            {
              x: "Cooking Materials",
              y: 70
            },
            {
              x: "Cleaning Materials",
              y: 35
            },
            {
              x: "Packaged Food",
              y: 41
            }
          ]
        },
        {
          name: "Sub-categories",
          data: [
            {
              x: "Chocolates",
              y: 10
            },
            {
              x: "Stationary",
              y: 20
            },
            {
              x: "Groceries",
              y: 51
            },
            {
              x: "Cereals",
              y: 30
            },
            {
              x: "Soft Drinks",
              y: 20
            },
            {
              x: "Mocktails",
              y: 30
            }
          ]
        }
      ],

      legend: {
        show: false
      },
      chart: {
        height: 300,
        type: "treemap"
      },
      title: {
        text: "Available Stock Treemap",
        align: "center"
      }
    };
  }
}