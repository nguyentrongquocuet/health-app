import { RefObject, useEffect, useRef } from 'react'

const useClickOutside = (ref: RefObject<HTMLElement | null>, callback: (event: Event) => void) => {
  /**
   * We don't want to add and remove repeatedly when `callback` changes
   */
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    if (!ref.current) {
      return
    }

    const handler = (e: Event) => {
      const el = ref.current

      if (el && e.target && !el.contains(e.target as HTMLElement) && el !== e.target) {
        callbackRef.current(e)
      }
    }

    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [ref])
}

export default useClickOutside
