import { Component, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";
import { OnInit } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTheme,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit  {

  
  getRowClass(index: number): string {
    return index % 2 === 0 ? 'even-row' : 'odd-row';
  }


  selectedSort: string = 'all'; // Initialize with the default sort option
  itemsPerPage: number = 5;
  currentPage: number = 1;

  // Define your dummy data here, replace with actual data.
  rows: any[] = [
    { sNo: 1, vendorName: 'Gold 1', address: 'Mumbai', contact: '123-456-7890' },
    { sNo: 2, vendorName: 'Tata', address: 'Nagpur', contact: '987-654-3210' },
    { sNo: 3, vendorName: 'Gold', address: 'Vikharabad', contact: '555-123-4567' },
    { sNo: 4, vendorName: 'Surya', address: 'Chennai', contact: '333-777-9999' },
    { sNo: 5, vendorName: 'Zamir', address: 'Bangalore', contact: '111-222-3333' },
    { sNo: 6, vendorName: 'Tata', address: 'Hyderabad', contact: '888-777-6666' },
    { sNo: 7, vendorName: 'Gold', address: 'Nagpur', contact: '777-888-9999' },
    { sNo: 8, vendorName: 'Zamir', address: 'Vikharabad', contact: '111-222-3333' },
    { sNo: 9, vendorName: 'Surya', address: 'Chennai', contact: '999-888-7777' },
    { sNo: 10, vendorName: 'Tata', address: 'Mumbai', contact: '444-555-6666' },
  ];
  

  //Implement sorting based on selectedSort value.
 displayedRows() {
    if (this.selectedSort === 'all') {
      return this.rows;
      console.log(this.selectedSort);
    } else {
      return this.rows.filter(row => row.address === this.selectedSort);
    }
  }
 
  
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    const maxPage = Math.ceil(this.displayedRows.length / this.itemsPerPage);
    if (this.currentPage < maxPage) {
      this.currentPage++;
    }
  }

  

  ngOnInit() {
  }



  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [25, 15, 44, 55, 41, 17],
      chart: {
        width: "120%",
        type: "pie"
      },
      labels: [
        "Mumbai",
        "Bangalore",
        "Chennai",
        "Hyderabad",
        "Vikharabad",
        "Nagpur"
      ],
      theme: {
       
          palette: "palette10",
        monochrome: {
          enabled: true
        }
      },
      title: {
        text: "Vendors from Various Cities"
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

}