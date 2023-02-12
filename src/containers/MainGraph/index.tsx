import { getMonthlyBMIChartData } from '@app/api'
import Chart from '@app/components/Chart'
import { useRef } from 'react'

import { createChartOptions } from './utils'

const chartData = [...getMonthlyBMIChartData()]

const MainBMIGraph = () => {
  const options = useRef(createChartOptions(chartData[0], chartData[1]))

  return <Chart options={options.current} />
}

export default MainBMIGraph
