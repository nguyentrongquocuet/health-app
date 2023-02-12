import { useCallback, useEffect, useRef, useState } from 'react'

type FakeFetchRefData<I extends any[], R> =
  | {
      data: undefined
      refetch: (input: I, staleData?: boolean) => void
      isLoading: true
    }
  | {
      data: R
      refetch: (input: I, staleData?: boolean) => void
      isLoading: false
    }

// eslint-disable-next-line @typescript-eslint/no-empty-function
const emptyFn = () => {}

const useFakeFetch = <I extends any[], R>(fetchFn: (...input: I) => Promise<R>, initialInputs: I) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setB] = useState(false)

  const { current: state } = useRef<FakeFetchRefData<I, R>>({
    data: undefined,
    isLoading: true,
    refetch: emptyFn,
  } as any)

  const rerender = () => setB((v) => !v)

  const fetchData = useCallback(async (args: I, staleData = false) => {
    if (staleData) {
      state.data = undefined
    }

    state.isLoading = true
    rerender()
    const data = await fetchFn(...args)

    state.data = data
    state.isLoading = false
    rerender()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  state.refetch = fetchData

  useEffect(() => {
    fetchData(initialInputs)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return state
}

export default useFakeFetch
