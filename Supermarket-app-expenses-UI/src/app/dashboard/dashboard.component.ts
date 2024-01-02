import { Component, ViewChild, OnInit } from '@angular/core';


import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexTooltip,
  ApexXAxis,
  ApexLegend,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexPlotOptions,
  ApexYAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  markers: any; //ApexMarkers;
  stroke: any; //ApexStroke;
  yaxis: ApexYAxis | ApexYAxis[];
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  colors: string[];
  labels: string[] | number[];
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  legend: ApexLegend;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

declare global {
  interface Window {
    Apex: any;
  }
}

const sparkLineData = [
  47,
  45,
  54,
  38,
  56,
  24,
  65,
  31,
  37,
  39,
  62,
  51,
  35,
  41,
  35,
  27,
  93,
  53,
  61,
  27,
  54,
  43,
  19,
  46
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  

  ngOnInit(): void {
  }

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartAreaSparkline1Options: Partial<ChartOptions>;
  public chartAreaSparkline2Options: Partial<ChartOptions>;
  public chartAreaSparkline3Options: Partial<ChartOptions>;
  public chartLineSparkline1Options: Partial<ChartOptions>;
  public chartLineSparkline2Options: Partial<ChartOptions>;
  public chartLineSparkline3Options: Partial<ChartOptions>;
  public chartLineSparkline4Options: Partial<ChartOptions>;
  public chartBarSparkline1Options: Partial<ChartOptions>;
  public chartBarSparkline2Options: Partial<ChartOptions>;
  public chartBarSparkline3Options: Partial<ChartOptions>;
  public chartBarSparkline4Options: Partial<ChartOptions>;
  public commonAreaSparlineOptions: Partial<ChartOptions> = {
    chart: {
      type: "area",
      height: 160,
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      curve: "straight"
    },
    fill: {
      opacity: 0.3
    },
    yaxis: {
      min: 0
    }
  };
  public commonLineSparklineOptions: Partial<ChartOptions> = {
    chart: {
      type: "line",
      width: 100,
      height: 35,
      sparkline: {
        enabled: true
      }
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function(seriesName) {
            return "";
          }
        }
      },
      marker: {
        show: false
      }
    }
  };
  public commonBarSparklineOptions: Partial<ChartOptions> = {
    chart: {
      type: "bar",
      width: 100,
      height: 35,
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        columnWidth: "80%"
      }
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function(seriesName) {
            return "";
          }
        }
      },
      marker: {
        show: false
      }
    }
  };

  constructor() {

    this.chartOptions = {
      series: [
        {
          name: "Purchases",
          type: "column",
          data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6, 5, 6, 7.1, 4]
        },
        {
          name: "Sales",
          type: "column",
          data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5, 10, 11, 11.1, 12]
        },
        {
          name: "Revenue",
          type: "line",
          data: [20, 29, 37, 36, 44, 45, 50, 58, 70, 80, 85, 91]
        }
      ],
      
      chart: {
        height: 350,
        type: "line",
        stacked: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [1, 1, 4]
      },
      title: {
        text: "SuperKart - Revenue Analysis (Jan - Dec)",
        align: "left",
        offsetX: 110
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep","Oct","Nov","Dec"]
      },
      yaxis: [
        {
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: "#008FFB"
          },
          labels: {
            style: {
              colors: "#008FFB"
            }
          },
          title: {
            text: "Income (thousand crores)",
            style: {
              color: "#008FFB"
            }
          },
          tooltip: {
            enabled: true
          }
        },
        {
          seriesName: "Income",
          opposite: true,
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: "#00E396"
          },
          labels: {
            style: {
              colors: "#00E396"
            }
          },
          title: {
            text: "Operating Cashflow (thousand crores)",
            style: {
              color: "#00E396"
            }
          }
        },
        {
          seriesName: "Revenue",
          opposite: true,
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: "#FEB019"
          },
          labels: {
            style: {
              colors: "#FEB019"
            }
          },
          title: {
            text: "Revenue (thousand crores)",
            style: {
              color: "#FEB019"
            }
          }
        }
      ],
      tooltip: {
        fixed: {
          enabled: true,
          position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
          offsetY: 30,
          offsetX: 60
        }
      },
      legend: {
        horizontalAlign: "left",
        offsetX: 40
      }
    };

    
    // setting global apex options which are applied on all charts on the page
    window.Apex = {
      stroke: {
        width: 3
      },
      markers: {
        size: 0
      },
      tooltip: {
        fixed: {
          enabled: true
        }
      }
    };

    this.chartAreaSparkline1Options = {
      series: [
        {
          name: "Sales",
          data: this.randomizeArray(sparkLineData)
        }
      ],
      colors: ["#4F95DA"],
      title: {
        text: "$424,652",
        offsetX: 0,
        style: {
          fontSize: "24px"
        }
      },
      subtitle: {
        text: "Sales",
        offsetX: 0,
        style: {
          fontSize: "14px"
        }
      }
    };

    this.chartAreaSparkline2Options = {
      series: [
        {
          name: "Expenses",
          data: this.randomizeArray(sparkLineData)
        }
      ],
      colors: ["#5be29a"],
      title: {
        text: "$235,312",
        offsetX: 0,
        style: {
          fontSize: "24px"
        }
      },
      subtitle: {
        text: "Expenses",
        offsetX: 0,
        style: {
          fontSize: "14px"
        }
      }
    };

    this.chartAreaSparkline3Options = {
      series: [
        {
          name: "Profits",
          data: this.randomizeArray(sparkLineData)
        }
      ],
      colors: ["#4F95DA"],
      title: {
        text: "$135,965",
        offsetX: 0,
        style: {
          fontSize: "24px"
        }
      },
      subtitle: {
        text: "Profits",
        offsetX: 0,
        style: {
          fontSize: "14px"
        }
      }
    };

    this.chartLineSparkline1Options = {
      series: [
        {
          name: "chart-line-sparkline",
          data: this.randomizeArray(sparkLineData.slice(0, 10))
        }
      ]
    };

    this.chartLineSparkline2Options = {
      series: [
        {
          name: "chart-line-sparkline",
          data: this.randomizeArray(sparkLineData.slice(0, 10))
        }
      ]
    };

    this.chartLineSparkline3Options = {
      series: [
        {
          name: "chart-line-sparkline",
          data: this.randomizeArray(sparkLineData.slice(0, 10))
        }
      ]
    };

    this.chartLineSparkline4Options = {
      series: [
        {
          name: "chart-line-sparkline",
          data: this.randomizeArray(sparkLineData.slice(0, 10))
        }
      ]
    };

    this.chartBarSparkline1Options = {
      series: [
        {
          name: "chart-bar-sparkline",
          data: this.randomizeArray(sparkLineData.slice(0, 10))
        }
      ]
    };

    this.chartBarSparkline2Options = {
      series: [
        {
          name: "chart-bar-sparkline",
          data: this.randomizeArray(sparkLineData.slice(0, 10))
        }
      ]
    };

    this.chartBarSparkline3Options = {
      series: [
        {
          name: "chart-bar-sparkline",
          data: this.randomizeArray(sparkLineData.slice(0, 10))
        }
      ]
    };

    this.chartBarSparkline4Options = {
      series: [
        {
          name: "chart-bar-sparkline",
          data: this.randomizeArray(sparkLineData.slice(0, 10))
        }
      ]
    };
  }

  public randomizeArray(arg): number[] {
    var array = arg.slice();
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }



//////////////////

  

}