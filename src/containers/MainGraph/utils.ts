const MILLISECONDS_IN_28_DAYS = 28 * 24 * 3600 * 1000

export const createChartOptions = (weightData: number[][], fatData: number[][]) => {
  return {
    title: {
      text: 'BMI Graph',
      style: {
        fontSize: '0px',
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
      /**
       * use 28Days interval to get month ticks, thanks to this answer `https://stackoverflow.com/a/33803090`
       */
      tickInterval: MILLISECONDS_IN_28_DAYS,
      startOnTick: true,
    },
    yAxis: {
      visible: false,
    },
    plotOptions: {
      series: {
        boostThreshold: 0,
        dataGrouping: {
          enabled: true,
          units: [['month', [1]]],
          approximation: 'average',
          forced: true,
          groupPixelWidth: 52,
        },
      },
    },
  }
}
