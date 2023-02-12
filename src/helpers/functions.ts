export const timeoutPromisify = <I extends any[], R>(fn: (...i: I) => R, timeoutFn: () => number) => {
  return (...p: I) => {
    return new Promise<R>((res) => {
      window.setTimeout(() => {
        res(fn(...p))
      }, timeoutFn())
    })
  }
}
