import Highcharts from '@app/libs/highcharts'
import HighchartsReact from 'highcharts-react-official'
import { ForwardedRef, forwardRef, RefObject, useEffect, useRef, useState } from 'react'

export type TChartRef = HighchartsReact.RefObject

const Chart = forwardRef((props: HighchartsReact.Props, ref: ForwardedRef<TChartRef>) => {
  return <HighchartsReact {...props} highcharts={Highcharts} ref={ref} />
})

Chart.displayName = 'Chart'

function setRef<T>(ref: ForwardedRef<T>, current: T) {
  if (typeof ref === 'function') {
    ref(current)
  } else if (ref) {
    ref.current = current
  }
}

function forwardRefTo<T>(...refs: RefObject<T>[]) {
  return (current: T) => {
    refs.forEach((ref) => setRef(ref, current))
  }
}

const AppChart = forwardRef((props: HighchartsReact.Props, ref: ForwardedRef<TChartRef>) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null)
  const [show, setShow] = useState(false)
  const optionsRef = useRef(props.options)

  useEffect(() => {
    optionsRef.current = props.options
  }, [props.options])

  const chartUI = show ? <Chart {...props} ref={forwardRefTo(chartComponentRef, ref as any)} className="w-full h-full" options={optionsRef.current} /> : null

  useEffect(() => {
    const { current: container } = containerRef

    if (!container) {
      return
    }

    /**
     * Adapt width and height of container after mounted container but before mounting chart
     * The issue happens on the first mount, chart mounting immediately causes wrong calculation on width and height
     */
    const { clientHeight, clientWidth } = container
    console.log('client width', clientWidth)
    const { current: options = {} } = optionsRef
    options.chart = { ...options.chart, width: clientWidth || container.parentElement?.clientWidth, height: clientHeight }
    setShow(true)

    const adaptSize = () => {
      const { current: chart } = chartComponentRef
      const { current: container } = containerRef

      if (!chart || !container) {
        return
      }

      const { clientHeight, clientWidth } = container
      chart.chart.setSize(clientWidth, clientHeight, true)
    }

    window.addEventListener('resize', adaptSize)

    return () => {
      window.removeEventListener('resize', adaptSize)
    }
  }, [props.responsive])

  return (
    <div ref={containerRef} className="h-full w-full grow">
      {chartUI}
    </div>
  )
})

AppChart.displayName = 'AppChart'

export default AppChart
