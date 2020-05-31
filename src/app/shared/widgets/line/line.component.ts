import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-widget-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {

  chartOptions:{};

  Highcharts = Highcharts;
  constructor() { }

  ngOnInit() {
    this.chartOptions = {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Monthly Offers'
        },
        subtitle: {
            text: 'Year 2019'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            //categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'nº Offers'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Total',
            data: [6.0, 12.0, 10.0, 22, 23, 16, 15,  9, 20, 14, 17, 23]
            //data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'Informática',
            data: [4.0, 5.0,  6.0,  10,  5,  7,  8,  1, 10,  8, 10, 12]
            //data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'Marketing',
            data: [0.0, 5.0,  3.0,   7,  9,  5,  4,  7, 7,   3,  2,  8]
            //data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }, {
            name: 'Administración',
            data: [2.0, 2.0,  1.0,   5,  9,  4,  3,  1, 3,   3,  5,  3]
            //data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
       }]
    };
    
  }

}
