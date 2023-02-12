import { getMonthlyBMIChartData } from '@app/api'
import Chart, { TChartRef } from '@app/components/Chart'
import useFakeFetch from '@app/hooks/useFakeFetch'
import { useEffect, useRef } from 'react'

import { createChartOptions, createFatSerie, createWeightSerie } from './utils'

const options = createChartOptions()

const BodyRecordChart = () => {
  const ref = useRef<TChartRef | null>(null)
  const { data: chartData, isLoading } = useFakeFetch(getMonthlyBMIChartData, [20])

  useEffect(() => {
    const { current: chart } = ref

    if (!chart) {
      return
    }

    if (!isLoading) {
      chart.chart.addSeries(createWeightSerie(chartData[0]), false)
      chart.chart.addSeries(createFatSerie(chartData[1]), false)
      chart.chart.redraw(true)
    }
  }, [isLoading, chartData])

  return <Chart ref={ref} options={options} />
}

export default BodyRecordChart
