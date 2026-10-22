import { useEffect, useRef } from 'react'

/** Subtle parallax on a background layer (translateY only). */
export function useParallax(strength = 0.12) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0

    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const rect = el.parentElement?.getBoundingClientRect()
        if (!rect) return
        const mid = rect.top + rect.height / 2 - window.innerHeight / 2
        el.style.transform = `translate3d(0, ${mid * strength}px, 0)`
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
    }
  }, [strength])

  return ref
}
