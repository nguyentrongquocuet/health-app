const MILLISECONDS_IN_28_DAYS = 28 * 24 * 3600 * 1000

export const createWeightSerie = (data: number[][]): Highcharts.SeriesOptionsType => ({
  type: 'line',
  data: data,
  name: 'Weight',
  color: '#8FE9D0',
  marker: {
    symbol: 'circle',
  },
})

export const createFatSerie = (data: number[][]): Highcharts.SeriesOptionsType => ({
  type: 'line',
  data: data,
  name: 'Body fat percentage',
  color: '#FFCC21',
  marker: {
    symbol: 'circle',
  },
})

export const createChartOptions = () => {
  return {
    title: {
      text: 'BMI Graph',
      style: {
        fontSize: '0px',
      },
    },
    series: [],
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
