import Chart from '@app/components/Chart'
import { faker } from '@faker-js/faker'

const milsPerDay = 24 * 3600 * 1000

const generateMonthsTimestamp = () => {
  const todayStamp = Date.now()

  const monthsTimestamp: number[] = []

  for (let i = 0; i < 600; i++) {
    monthsTimestamp.push(todayStamp - i * milsPerDay)
  }

  return monthsTimestamp
}

const latest12Months = generateMonthsTimestamp().reverse()

const weightData = latest12Months.map((m) => [m, faker.datatype.number({ max: 20, min: 10 })])
const fatData = latest12Months.map((m) => [m, faker.datatype.number({ max: 20, min: 10 })])

const MILLISECONDS_IN_28_DAYS = 28 * 24 * 3600 * 1000

const options: Highcharts.Options = {
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
    range: 330 * 24 * 3600 * 1000,
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

const MainBMIGraph = () => {
  return <Chart options={options} />
}

export default MainBMIGraph
