import { useCallback, useEffect, useRef, useState } from 'react'

type FakeFetchRefData<I extends any[], R> =
  | {
      data: undefined
      refetch: (...input: I) => void
      isLoading: true
    }
  | {
      data: R
      refetch: (...input: I) => void
      isLoading: false
    }

// eslint-disable-next-line @typescript-eslint/no-empty-function
const emptyFn = () => {}

const useFakeFetch = <I extends any[], R>(fetchFn: (...input: I) => Promise<R>, initialInputs: I) => {
  const [_, setB] = useState(false)

  const { current: state } = useRef<FakeFetchRefData<I, R>>({
    data: undefined,
    isLoading: false,
    refetch: emptyFn,
  } as any)

  const rerender = () => setB((v) => !v)

  const fetchData = useCallback(async () => {
    state.isLoading = true
    rerender()
    const data = await fetchFn(...initialInputs)
    state.data = data
    state.isLoading = false
    rerender()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  state.refetch = fetchData

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return state
}

export default useFakeFetch
