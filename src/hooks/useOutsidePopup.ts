import { useEffect } from "react"

function useOutsidePopup<T extends HTMLElement = HTMLDivElement>(
  ref: React.RefObject<T>,
  handler: (event: Event) => void,
  togglerRef: React.RefObject<T>
): void {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current
      const eventTarget = event?.target as Node
      if (
        !el?.contains(eventTarget || null) &&
        togglerRef &&
        !togglerRef?.current?.contains(eventTarget)
      ) {
        handler(event)
      }
    }

    document.addEventListener("mousedown", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
    }
  }, [ref, handler, togglerRef])
}

export default useOutsidePopup
