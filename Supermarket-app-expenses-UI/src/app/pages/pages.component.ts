import { Component, ViewChild } from "@angular/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexXAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  title: ApexTitleSubtitle;
  colors: string[];
  labels: string[];
  stroke: any; // ApexStroke;
  dataLabels: any; // ApexDataLabels;
  fill: ApexFill;
  tooltip: ApexTooltip;
};





@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {




  getRowClass(index: number): string {
    return index % 2 === 0 ? 'even-row' : 'odd-row';
  }


  selectedTransactionType: string = 'all';
  transactions: any[] = [
    { sno: 1, quantity: 10, type: 'Sales', date: '2023-01-15', tax: 5.0 },
    { sno: 2, quantity: 5, type: 'Purchases', date: '2023-02-20', tax: 2.5 },
    { sno: 3, quantity: 8, type: 'Sales', date: '2023-03-10', tax: 4.0 },
    { sno: 4, quantity: 12, type: 'Purchases', date: '2023-04-05', tax: 6.0 },
    { sno: 5, quantity: 15, type: 'Sales', date: '2023-05-12', tax: 7.5 },
    { sno: 6, quantity: 7, type: 'Purchases', date: '2023-06-18', tax: 3.5 },
    { sno: 7, quantity: 11, type: 'Sales', date: '2023-07-25', tax: 5.5 },
    { sno: 8, quantity: 6, type: 'Purchases', date: '2023-08-30', tax: 3.0 },
    { sno: 9, quantity: 9, type: 'Sales', date: '2023-09-08', tax: 4.5 },
    { sno: 10, quantity: 4, type: 'Purchases', date: '2023-10-15', tax: 2.0 },
    { sno: 11, quantity: 14, type: 'Sales', date: '2023-11-20', tax: 7.0 },
    { sno: 12, quantity: 3, type: 'Purchases', date: '2023-12-25', tax: 1.5 },
    { sno: 13, quantity: 7, type: 'Sales', date: '2024-01-05', tax: 3.5 },
    { sno: 14, quantity: 10, type: 'Purchases', date: '2024-02-10', tax: 5.0 },
    { sno: 15, quantity: 6, type: 'Sales', date: '2024-03-15', tax: 3.0 }
  ];

  
currentPage: number = 1;
itemsPerPage: number = 5; // You can set the default value to 5 items per page
totalItems: number = this.transactions.length; // Assuming transactions is your data array
totalPages: number;

prevPage() {
  if (this.currentPage > 1) {
    this.currentPage--;
  }
}

nextPage() {
  var totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
  if (this.currentPage < totalPages) {
    this.currentPage++;
  }
}

  

  filterTransactions() {
    return this.transactions.filter(transaction =>
      this.selectedTransactionType === 'all' || transaction.type === this.selectedTransactionType
    );
  }

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [

        
        {
          name: "Sales",
          type: "column",
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        },
        {
          name: "Purchases",
          type: "line",
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }
        
      ],
      
      chart: {
        height: 350,
        type: "line"
      },
      stroke: {
        width: [0, 4]
      },
      title: {
        text: "HTTP Sources"
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
      },
      labels: [
        "01 Jan 2001",
        "02 Jan 2001",
        "03 Jan 2001",
        "04 Jan 2001",
        "05 Jan 2001",
        "06 Jan 2001",
        "07 Jan 2001",
        "08 Jan 2001",
        "09 Jan 2001",
        "10 Jan 2001",
        "11 Jan 2001",
        "12 Jan 2001"
      ],
      xaxis: {
        type: "datetime"
      },
      yaxis: [
        {
          title: {
            text: "Sales"
          }
        },
        {
          opposite: true,
          title: {
            text: "Purchases"
          }
        }
      ]
    };
  }

}
