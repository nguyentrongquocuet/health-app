const MILLISECONDS_IN_28_DAYS = 28 * 24 * 3600 * 1000

export const createChartOptions = (weightData: number[][], fatData: number[][]): Highcharts.Options => {
  return {
    title: {
      text: 'My chart',
      style: {
        display: 'none',
      },
    },
    series: [
      {
        type: 'line',
        data: weightData,
        name: 'Weight',
        color: '#FFCC21',
        marker: {
          symbol: 'circle',
        },
      },
      {
        type: 'line',
        data: fatData,
        name: 'Body fat percentage',
        color: '#8FE9D0',
        marker: {
          symbol: 'circle',
        },
      },
    ],
    xAxis: {
      type: 'datetime',
      minRange: 1,
      tickInterval: MILLISECONDS_IN_28_DAYS,
    },
    yAxis: {
      visible: false,
    },
    plotOptions: {
      series: {
        dataGrouping: {
          enabled: true,
          units: [
            ['month', [1]],
            ['day', [1]],
          ],
          forced: true,
          approximation: 'average',
        },
      },
    },
    rangeSelector: {
      enabled: true,
      buttons: [
        {
          type: 'day',
          count: 1,
          text: '日',
          dataGrouping: {
            forced: true,
            units: [['day', [1]]],
          },
        },
        {
          type: 'week',
          count: 1,
          text: '週',
          dataGrouping: {
            forced: true,
            units: [['day', [1]]],
          },
        },
        {
          type: 'month',
          text: '月',
          dataGrouping: {
            forced: true,
            units: [['day', [1]]],
          },
          count: 1,
        },
        {
          type: 'year',
          text: '年',
          dataGrouping: {
            units: [['month', [1]]],
          },
          count: 1,
        },
      ],
      selected: 3,
      allButtonsEnabled: true,
    },
  }
}
