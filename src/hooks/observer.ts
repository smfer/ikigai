import { useEffect, useRef, useState } from "react"

export const useObserve = ({ threshold }: { threshold: number | number[] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [inserccion, setInserccion] = useState<boolean | null>(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entires) => {
        entires.forEach((entry) => {
          setInserccion(entry.isIntersecting)
        })
      },
      { threshold }
    )

    if (!ref.current) return

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref, threshold])

  return { inserccion, ref }
}
