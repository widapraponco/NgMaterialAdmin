import { Component } from "@angular/core";
import { Content, ContentConfig } from "src/app/components/content.interface";
import { EChartsOption } from 'echarts';

@Component({
    selector: 'chart-dash',
    template: `
    <div echarts [options]="chartOption" class="demo-chart"></div>
    `
})
export class ChartDashboardComponent implements Content {
    config!: ContentConfig;

    chartOption: EChartsOption = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
          },
        ],
      };
}