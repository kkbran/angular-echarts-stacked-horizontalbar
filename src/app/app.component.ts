import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';

  private myChart: any = null;
  private barchart: any = null;

  ngOnInit() {
    this.InitDonut();
    this.InitStackedBar();
  }

  private InitStackedBar(): void {
    this.barchart = echarts.init(document.getElementById('barchart') as any);
    const option = {
      tooltip: {
        trigger: 'axis',
        show: false,
      },
      legend: {
        show: false,
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
        show: false,
      },
      yAxis: {
        type: 'category',
        show: false,
        data: ['Mon'],
      },
      series: [
        {
          name: 'Direct',
          type: 'bar',
          stack: 'total',
          barWidth: 10,

          label: {
            show: false,
          },
          itemStyle: {
            borderRadius: 10,
          },
          emphasis: {
            focus: 'series',
          },
          data: [320],
        },
        {
          name: 'Mail Ad',
          type: 'bar',
          stack: 'total',
          barWidth: 10,
          label: {
            show: false,
          },
          itemStyle: {
            borderRadius: 10,
          },
          emphasis: {
            focus: 'series',
          },
          data: [120],
        },
        {
          name: 'Affiliate Ad',
          type: 'bar',
          stack: 'total',
          label: {
            show: false,
          },
          itemStyle: {
            borderRadius: 10,
          },
          emphasis: {
            focus: 'series',
          },
          data: [220],
        },
        {
          name: 'Video Ad',
          type: 'bar',
          stack: 'total',
          barWidth: 10,
          label: {
            show: false,
          },
          itemStyle: {
            borderRadius: 10,
          },
          emphasis: {
            focus: 'series',
          },
          data: [150],
        },
        {
          name: 'Search Engine',
          type: 'bar',
          stack: 'total',
          barWidth: 10,
          label: {
            show: false,
          },
          itemStyle: {
            borderRadius: 10,
          },
          emphasis: {
            focus: 'series',
          },
          data: [820],
        },
      ],
    };

    this.barchart.setOption(option);
  }
  private InitDonut(): void {
    this.myChart = echarts.init(document.getElementById('donut') as any);

    const option = {
      legend: {
        orient: 'horizontal',
        x: 'left',
        data: ['elem1', 'elem2', 'elem3', 'elem4', 'elem5'],
        show: true,
      },
      width: 200,
      series: [
        {
          name: 'NOMBRE',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
          itemStyle: {
            borderRadius: [10, 10],
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
          data: [
            { value: 335, name: 'elem1' },
            { value: 310, name: 'elem2' },
            { value: 234, name: 'elem3' },
            { value: 135, name: 'elem4' },
            { value: 538, name: 'elem5' },
          ],
        },
      ],
    };

    this.myChart.setOption(option);
  }

  OnElem1Click() {
    console.log('OnElem1Click');
    this.myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: 1,
    });
  }

  OnElem1Mouseover() {
    console.log('OnElem1Mouseover');
    this.myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: 1,
    });
  }

  OnElem1Mouseout() {
    console.log('OnElem1Mouseout');
    this.myChart.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
      dataIndex: 1,
    });
  }

  OnElem2Mouseover() {
    console.log('OnElem2Mouseover');
    this.myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: 2,
    });
  }

  OnElem2Mouseout() {
    console.log('OnElem2Mouseout');
    this.myChart.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
      dataIndex: 2,
    });
  }
}
