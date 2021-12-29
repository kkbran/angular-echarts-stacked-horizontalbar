import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';

  private barchart: any = null;

  ngOnInit() {
    this.InitStackedBar();
  }

  private InitStackedBar(): void {
    this.barchart = echarts.init(document.getElementById('barchart') as any);
    const option = {
      legend: {
        show: false,
      },
      tooltip: {
        trigger: 'axis',
        show: true,
        position: function (point, params, dom, rect, size) {
          return [point[0], '60%'];
        },
        backgroundColor: '#000000',
        formatter: function (params) {
          var colorSpan = (color) =>
            '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
            color +
            '"></span>';
          let rez = '<p>' + params[0].axisValue + '</p>';
          console.log(params); //quite useful for debug÷
          params.forEach((item) => {
            //console.log(item); //quite useful for debug
            var xx =
              '<p>' +
              colorSpan(item.color) +
              ' ' +
              item.seriesName +
              ': ' +
              item.data +
              '%' +
              '</p>';
            rez += xx;
          });

          return rez;
        },
      },
      grid: {
        left: '1%',
      },
      xAxis: {
        type: 'value',
        show: false,
      },
      yAxis: {
        type: 'category',
        show: false,
      },
      series: [
        {
          name: 'Last week',
          type: 'bar',
          stack: 'total',

          label: {
            show: false,
          },
          itemStyle: {
            borderRadius: 10,
            color: '#5188f5',
            shadowColor: '#5188f5',
            shadowOffsetX: 5,
          },
          emphasis: {},
          data: [320],
        },
        {
          name: 'Last 2 weeks',
          type: 'bar',
          stack: 'total',
          barWidth: 10,
          label: {
            show: false,
          },
          itemStyle: {
            borderRadius: 10,
            color: '#74E67D',
            shadowColor: '#74E67D',
            shadowOffsetX: 5,
          },
          emphasis: {},
          data: [120],
        },
        {
          name: 'Last month',
          type: 'bar',
          stack: 'total',
          label: {
            show: false,
          },
          itemStyle: {
            borderRadius: 10,
            color: '#F1B956',
            shadowColor: '#F1B956',
            shadowOffsetX: 5,
          },
          emphasis: {},
          data: [220],
        },
        {
          name: 'Last 2-3 months',
          type: 'bar',
          stack: 'total',
          barWidth: 10,
          label: {
            show: false,
          },
          itemStyle: {
            borderRadius: 10,
            color: '#EF5D02',
            shadowColor: '#EF5D02',
            shadowOffsetX: 5,
          },
          emphasis: {},
          data: [150],
        },
        {
          name: '>90 days',
          type: 'bar',
          stack: 'total',
          barWidth: 10,
          label: {
            show: false,
          },
          itemStyle: {
            borderRadius: 10,
            color: '#B11414',
            shadowColor: '#B11414',
            shadowOffsetX: 5,
          },
          emphasis: {},
          data: [489],
        },
      ],
    };

    this.barchart.setOption(option);
  }
}
