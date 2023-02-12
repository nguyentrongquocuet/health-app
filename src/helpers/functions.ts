export const timeoutPromisify = <I extends any[], F extends (...input: I) => any>(fn: F, timeoutFn: () => number) => {
  return (...p: Parameters<F>) => {
    return new Promise<ReturnType<F>>((res) => {
      window.setTimeout(() => {
        res(fn(...p))
      }, timeoutFn())
    })
  }
}
