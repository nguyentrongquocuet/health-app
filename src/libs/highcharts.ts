import Highcharts from 'highcharts/highstock'

Highcharts.setOptions({
  chart: {
    backgroundColor: 'transparent',
    marginTop: 0,
    marginLeft: 20,
    marginRight: 20,
    style: {
      textOverflow: 'visible',
    },
  },
  legend: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
  xAxis: {
    lineWidth: 1,
    gridLineWidth: 1,
    gridLineColor: '#777777',
    lineColor: 'transparent',
    tickColor: 'transparent',
    labels: {
      style: {
        color: '#FFFFFF',
      },
    },
    dateTimeLabelFormats: {
      month: '%m 月',
      day: '%d 日',
      week: '%d 週',
    },
  },
  tooltip: {
    valueDecimals: 0,
  },
  stockTools: {
    gui: {
      enabled: false,
    },
  },
  navigator: {
    enabled: false,
  },
  scrollbar: {
    enabled: false,
  },
  plotOptions: {
    series: {
      label: {
        style: {
          textAlign: 'center',
        },
      },
    },
  },
})

export default Highcharts
