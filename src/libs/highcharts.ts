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
        color: '#ffffff',
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
  rangeSelector: {
    enabled: false,
    inputEnabled: false,
    allButtonsEnabled: true,
    verticalAlign: 'bottom',
    buttonTheme: {
      width: 56,
      r: 12,
      height: 24,
    },
    labelStyle: {
      opacity: 0,
      display: 'block',
      fontSize: '0px',
    },
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
