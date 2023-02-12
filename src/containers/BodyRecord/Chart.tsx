import { getMonthlyBMIChartData } from '@app/api'
import Chart, { TChartRef } from '@app/components/Chart'
import { useRef } from 'react'

import { createChartOptions } from './utils'

const chartData = getMonthlyBMIChartData(20)

const BodyRecordChart = () => {
  const ref = useRef<TChartRef | null>(null)
  const { current: options } = useRef(createChartOptions(chartData[0], chartData[1]))

  console.log('chartData', chartData)

  return <Chart ref={ref} options={options} />
}

export default BodyRecordChart
