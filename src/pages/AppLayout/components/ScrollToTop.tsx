import { ReactComponent as ScrollBtn } from '@app/assets/component_scroll.svg'
import { useEffect, useRef } from 'react'
const ScrollToTop = () => {
  const ref = useRef<HTMLButtonElement | null>(null)
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    if (!ref.current) {
      return
    }

    const onScroll = () => {
      const { current: buttonEl } = ref

      if (!buttonEl) {
        return
      }

      if (buttonEl && window.scrollY > 0) {
        buttonEl.classList.add('active')
      } else {
        buttonEl.classList.remove('active')
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <button ref={ref} onClick={toTop} className="fixed right-24 bottom-12 to-top-btn">
      <ScrollBtn />
    </button>
  )
}

export default ScrollToTop
